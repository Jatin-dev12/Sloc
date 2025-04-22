import React, { useState } from 'react';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(5000000); // 50 Lakhs
  const [tenure, setTenure] = useState(20); // in years
  const [interestRate, setInterestRate] = useState(9); // %

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfMonths = tenure * 12;
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
  };

  const emi = calculateEMI();
  const totalPayment = emi * tenure * 12;
  const totalInterest = totalPayment - loanAmount;

  const pieData = {
    labels: ['Total Interest ₹' + totalInterest.toLocaleString(), 'Loan Amount ₹' + loanAmount.toLocaleString()],
    datasets: [
      {
        data: [totalInterest, loanAmount],
        backgroundColor: ['#B0B0B0', '#003366'],
        hoverBackgroundColor: ['#999', '#002244'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container className=" emi-chart mt-4">
      <Row className=' justify-content-between p-0'>
        <Col md={7} className='bg-chane less-wi' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-offset="300"
        >

          <Form className="mt-4">
            <Form.Group className="mb-4">
              <Form.Label>Loan Amount (₹)</Form.Label>
              <Form.Range
                className="custom-range"
                min={1000000} // 1 million
                max={100000000} // 100 million
                step={1000000} // 1 million step
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                style={{
                  '--range-progress': `${((loanAmount - 1000000) / (100000000 - 1000000)) * 100}%`
                }}
              />

              <div className="d-flex justify-content-between">
                <span>1L</span>
                <span>30CR</span>
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Tenure (Years)</Form.Label>
              <Form.Range
                className="custom-range"
                min={2}
                max={30}
                value={tenure}
                onChange={(e) => setTenure(Number(e.target.value))}
                style={{
                  '--range-progress': `${((tenure - 2) / (30 - 2)) * 100}%`
                }}
              />
              <div className="d-flex justify-content-between">
                <span>2</span>
                <span>30</span>
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label>Rate of Interest (%)</Form.Label>
              <Form.Range
                className="custom-range"
                min={7}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                style={{
                  '--range-progress': `${((interestRate - 7) / (15 - 7)) * 100}%`
                }}
              />
              <div className="d-flex justify-content-between">
                <span>7%</span>
                <span>15%</span>
              </div>
            </Form.Group>
          </Form>
        </Col>

        <Col md={5} className='bg-chane'data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-offset="300"
        >
          <Card className="set-to">
            <h6 className=" text-center">YOUR EMI PER MONTH</h6>
            <h3 className="text-center  fw-bold mb-4">₹ {Math.round(emi).toLocaleString()}</h3>
            <Pie data={pieData} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EMICalculator;
