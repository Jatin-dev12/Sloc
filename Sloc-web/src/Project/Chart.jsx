import React, { useState } from "react";
import { Container, Row, Col, Form, Card, Button } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);
const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs
  const [tenure, setTenure] = useState(20); // in years
  const [interestRate, setInterestRate] = useState(9); // %
  const [emiPlans, setEmiPlans] = useState(null); // Store API response
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // Local EMI calculation
  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfMonths = tenure * 12;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
  };
  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;
  // Pie chart data
  const pieData = {
    labels: [
      "Total Interest ₹" + totalInterest.toLocaleString(),
      "Loan Amount ₹" + loanAmount.toLocaleString(),
    ],
    datasets: [
      {
        data: [totalInterest, loanAmount],
        backgroundColor: ["#B0B0B0", "#003366"],
        hoverBackgroundColor: ["#999", "#002244"],
        borderWidth: 1,
      },
    ],
  };
  // Format loan amount (e.g., 50,00,000 to 50L or 1CR)
  const formatLoanAmount = (amount) => {
    if (amount >= 10000000) {
      return `${(amount / 10000000).toFixed(2)}CR`;
    } else if (amount >= 100000) {
      return `${(amount / 100000).toFixed(2)}L`;
    }
    return amount.toLocaleString();
  };
  // Fetch EMI plans from PayU API via CORS proxy
  // Fetch EMI plans from PayU API via CORS proxy
  const fetchEMIPlans = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        "https://proxy.cors.sh/https://apitest.payu.in/calculateEmi/v2",
        {
          txnAmount: loanAmount,
          additionalCharges: 0,
          offerKeys: null,
          autoApplyOffer: true,
          bankCodes: null,
          emiCodes: null,
          disableOverrideNceConfig: true,
          skus: [
            {
              skuId: "Product1",
              skuAmount: loanAmount,
              quantity: 1,
              offerKeys: null,
              autoApplyOffer: false,
            },
          ],
        },
        {
          headers: {
            "x-credential-username": "8avZcz", // Your PayU API Key
            "Content-Type": "application/json",
            accept: "application/json",
            "x-cors-api-key": "temp_9fa75133279c43e63bc1f221978255a2", // Replace with your cors.sh API key
          },
        }
      );
      if (response.data.status === 1) {
        setEmiPlans(response.data.result);
      } else {
        setError(response.data.message || "Failed to fetch EMI plans");
      }
    } catch (err) {
      setError(
        "Error fetching EMI plans: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container className="emi-chart mt-4">
      <Row className="justify-content-between p-0">
        <Col
          lg={7}
          md={12}
          className="bg-chane less-wi"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-offset="10"
        >
          <Form className="mt-4">
            <Form.Group className="mb-4">
              <Form.Label>
                Loan Amount (₹ {formatLoanAmount(loanAmount)} ){" "}
                <span className="fw-bold"></span>
              </Form.Label>
              <Form.Range
                className="custom-range"
                min={1000000}
                max={100000000}
                step={1000000}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{
                  "--range-progress": `${
                    ((loanAmount - 1000000) / (100000000 - 1000000)) * 100
                  }%`,
                }}
              />
              <div className="d-flex justify-content-between">
                <span>10L</span>
                <span>10CR</span>
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Tenure ({tenure} Years) <span className="fw-bold"></span>
              </Form.Label>
              <Form.Range
                className="custom-range"
                min={2}
                max={30}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={{
                  "--range-progress": `${((tenure - 2) / (30 - 2)) * 100}%`,
                }}
              />
              <div className="d-flex justify-content-between">
                <span>2</span>
                <span>30</span>
              </div>
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label>
                Rate of Interest ({interestRate}%){" "}
                <span className="fw-bold"></span>
              </Form.Label>
              <Form.Range
                className="custom-range"
                min={7}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{
                  "--range-progress": `${
                    ((interestRate - 7) / (15 - 7)) * 100
                  }%`,
                }}
              />
              <div className="d-flex justify-content-between">
                <span>7%</span>
                <span>15%</span>
              </div>
            </Form.Group>
            {/* <Button onClick={fetchEMIPlans} disabled={loading}>
              {loading ? 'Fetching EMI Plans...' : 'Fetch EMI Plans from PayU'}
            </Button> */}
          </Form>
        </Col>
        <Col
          lg={5}
          md={12}
          className="bg-chane"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-offset="10"
        >
          <Card className="set-to">
            <h6 className="text-center">YOUR EMI PER MONTH</h6>
            <h3 className="text-center fw-bold mb-4">
              ₹ {Math.round(emi).toLocaleString()}
            </h3>
            <Pie data={pieData} />
          </Card>
          {/*
          {error && <p className="text-danger mt-3">{error}</p>}
          {emiPlans && (
            <Card className="mt-3">
              <h6 className="text-center">PayU EMI Plans</h6>
              {Object.keys(emiPlans).map((bankCode) =>
                Object.keys(emiPlans[bankCode]).map((emiCode) => {
                  const plan = emiPlans[bankCode][emiCode];
                  return (
                    <div key={emiCode} className="p-2">
                      <p>
                        <strong>Bank:</strong> {bankCode}<br />
                        <strong>Tenure:</strong> {plan.tenure}<br />
                        <strong>EMI Amount:</strong> ₹{plan.emiAmount.toLocaleString()}<br />
                        <strong>Interest Rate:</strong> {plan.emiBankInterest}%<br />
                        <strong>Total Payable:</strong> ₹{plan.totalPayableAmount.toLocaleString()}
                      </p>
                    </div>
                  );
                })
              )}
            </Card>
          )} */}
        </Col>
      </Row>
    </Container>
  );
};
export default EMICalculator;
