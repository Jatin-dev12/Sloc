import React, { useEffect, useState } from "react";
import "../App.css";
import { Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Search from "../assets/Imgs/Search.svg";
import {
  Form,
  Button,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import Bg from "./sbg.png";
import Plus from "./plus.svg";
import Arrow from "../assets/Imgs/up-arrow.svg";

import f1 from "../assets/Imgs/f1.png";
import f2 from "../assets/Imgs/f2.png";
import f3 from "../assets/Imgs/f3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Card } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router";
import axios from "axios";

// const projects = [
//   {
//     id: 1,
//     title: "GODREJ VRIKSHYA",
//     price: "₹ 3.30 CR* ONWARDS",
//     location: "SECTOR 49, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",
//     image: f1, // Replace with actual image URL
//   },
//   {
//     id: 2,
//     title: "SMARTWORLD THE EDITION",
//     price: "₹ 6.50 CR* ONWARDS",
//     location: "SECTOR 66, GURGAON",
//     size: "3 & 4 BHK",
//     feet: "1948 - 3700 Sq.Ft.",

//     image: f2,
//   },
//   {
//     id: 3,
//     title: "GODREJ ARISTOCRAT",
//     price: "₹ 5.53 CR* ONWARDS",
//     location: "SECTOR 62, GURGAON",
//     feet: "1948 - 3700 Sq.Ft.",

//     size: "3 & 4 BHK",
//     image: f3,
//   },

// ];
function list() {
  const truncateToThreeWords = (text) => {
    if (!text) return '';
    return text.split(' ').slice(0, 2).join(' ');
  };
  const generateSlug = (name) => {
    return name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
          .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens
      : 'untitled-project'; // Fallback slug
  };  
  const [selectedCity, setSelectedCity] = useState({ id: null, name: 'City' });
  const [selectedProperty, setSelectedProperty] = useState({ id: null, name: 'Property Type' });
  const [projectId, setProjectId] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [cities, setCities] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [page, setPage] = useState(1);
  const [displayCount, setDisplayCount] = useState(6);
  const [hasMore, setHasMore] = useState(true);
  const [sortKey, setSortKey] = useState(null);
  const [totalProjects, setTotalProjects] = useState(0);

  const baseUrl = (import.meta.env.VITE_BASE_URL || 'https://admin.sloc.in/public').replace(/\/+$/, '');
  const token = 'AzlrVK30FVdEx0TwrRwqYrQTL';
  const location = useLocation();
  const navigate = useNavigate();

  // Fetch cities, property types, and initialize search
  useEffect(() => {
    // Fetch cities
    axios
      .get(`${baseUrl}/api/city`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.success) {
          setCities(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching cities:', error);
      });

    // Fetch property types
    axios
      .get(`${baseUrl}/api/property-type`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        if (response.data.success) {
          setPropertyTypes(response.data.data);
        }
      })
      .catch((error) => {
        console.error('Error fetching property types:', error);
      });

    // Read query parameters
    const params = new URLSearchParams(location.search);
    const cityId = params.get('city');
    const propertyTypeId = params.get('property_type');
    const projectIdParam = params.get('project_id');

    // Set initial state from query params
    if (cityId) {
      axios.get(`${baseUrl}/api/city`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const city = response.data.data.find(c => c.id.toString() === cityId);
          if (city) setSelectedCity({ id: city.id, name: city.name });
        });
    }
    if (propertyTypeId) {
      axios.get(`${baseUrl}/api/property-type`, { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const property = response.data.data.find(p => p.id.toString() === propertyTypeId);
          if (property) setSelectedProperty({ id: property.id, name: property.name });
        });
    }
    if (projectIdParam) {
      setProjectId(projectIdParam);
    }

    // Perform initial search
    const payload = {};
    if (cityId) payload.city = cityId;
    if (propertyTypeId) payload.property_type = propertyTypeId;
    if (projectIdParam) payload.project_id = projectIdParam;
    payload.page = 1;
    payload.per_page = 6;

    setSearchLoading(true);
    axios
      .post(`${baseUrl}/api/project-search`, payload, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data.success) {
          setSearchResults(response.data.data);
          setHasMore(response.data.data.length >= 6 && response.data.data.length < totalProjects);
          console.log('Initial search results:', response.data.data);
        } else {
          setSearchError(response.data.message || 'Search failed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching initial search results:', error);
        setSearchError('Failed to fetch search results.');
      })
      .finally(() => {
        setSearchLoading(false);
      });
  }, [baseUrl, location.search]);

  const handleCitySelect = (city) => {
    setSelectedCity({ id: city.id, name: city.name });
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty({ id: property.id, name: property.name });
  };

  const handleProjectIdInput = (event) => {
    setProjectId(event.target.value);
  };

  const handleSearch = (newPage = 1) => {
    setSearchLoading(true);
    setSearchError(null);
    if (newPage === 1) {
      setSearchResults([]);
      setDisplayCount(6);
    }

    const payload = {};
    if (selectedCity.id) payload.city = selectedCity.id.toString();
    if (selectedProperty.id) payload.property_type = selectedProperty.id.toString();
    if (projectId.trim()) payload.project_id = projectId.trim();
    payload.page = newPage;
    payload.per_page = newPage === 1 ? 6 : 3;

    console.log('Searching projects at:', `${baseUrl}/api/project-search`, 'Payload:', payload);

    axios
      .post(`${baseUrl}/api/project-search`, payload, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data.success) {
          const newResults = response.data.data;
          setSearchResults(prev => newPage === 1 ? newResults : [...prev, ...newResults]);
          setPage(newPage);
          const newDisplayCount = newPage === 1 ? 6 : displayCount + 3;
          setDisplayCount(newDisplayCount);
          setHasMore(newDisplayCount < totalProjects && newResults.length > 0);
          console.log('Search results:', newResults);

          // Update URL
          const params = new URLSearchParams();
          if (selectedCity.id) params.append('city', selectedCity.id);
          if (selectedProperty.id) params.append('property_type', selectedProperty.id);
          if (projectId.trim()) params.append('project_id', projectId.trim());
          navigate(`/search-Listing?${params.toString()}`);
        } else {
          setSearchError(response.data.message || 'Search failed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setSearchError('Failed to fetch search results.');
      })
      .finally(() => {
        setSearchLoading(false);
      });
  };

  const handleLoadMore = () => {
    handleSearch(page + 1);
  };

  // const handleSort = (propertyTypeId) => {
  //   setSortKey(propertyTypeId ? `property_type_${propertyTypeId}` : 'property_type');
  //   const sorted = [...searchResults].sort((a, b) => {
  //     // If propertyTypeId is provided, prioritize projects with matching property_type
  //     if (propertyTypeId) {
  //       const aMatches = a.property_type === propertyTypeId;
  //       const bMatches = b.property_type === propertyTypeId;
  //       if (aMatches && !bMatches) return -1; // a comes first
  //       if (!aMatches && bMatches) return 1; // b comes first
  //       // If both match or neither match, sort alphabetically by name
  //       return (a.name || 'Unknown').localeCompare(b.name || 'Unknown');
  //     }
  //     // Default: sort alphabetically by property type name
  //     const typeA = propertyTypes.find(pt => pt.id === a.property_type)?.name || 'Unknown';
  //     const typeB = propertyTypes.find(pt => pt.id === b.property_type)?.name || 'Unknown';
  //     return typeA.localeCompare(typeB);
  //   });
  //   setSearchResults(sorted);
  // };
  // const handleSort = (propertyTypeId) => {
  //   console.log('Setting sortKey to:', propertyTypeId);

  //   // Update sortKey and selectedProperty
  //   const selectedType = propertyTypes.find(pt => pt.id === propertyTypeId);
  //   setSortKey(propertyTypeId ? `property_type_${propertyTypeId}` : null);
  //   setSelectedProperty({
  //     id: propertyTypeId,
  //     name: selectedType ? selectedType.name : 'Property Type',
  //   });

  //   // Trigger search with the selected property type and reset to page 1
  //   handleSearch(1); // Reset to page 1 for new filter
  // };

  const handleSort = (propertyTypeId) => {
    const selectedType = propertyTypes.find(pt => pt.id === propertyTypeId);
    
    setSelectedProperty({
      id: propertyTypeId,
      name: selectedType ? selectedType.name : 'Sort By', // Default to 'Sort By' if something goes wrong
    });
  
    // Trigger the search with the selected property type and reset to page 1
    handleSearch(1);
  };
  
  // const clearFilter = (filter) => {
  //   // Create a copy of current state to modify
  //   let newCity = { ...selectedCity };
  //   let newProperty = { ...selectedProperty };
  //   let newProjectId = projectId;
  
  //   // Clear the specified filter
  //   if (filter === 'city') {
  //     newCity = { id: null, name: 'City' };
  //     setSelectedCity(newCity);
  //   } else if (filter === 'property') {
  //     newProperty = { id: null, name: 'Property Type' };
  //     setSelectedProperty(newProperty);
  //   } else if (filter === 'project_id') {
  //     newProjectId = '';
  //     setProjectId(newProjectId);
  //   }
  
  //   // Update URL with remaining filters
  //   const params = new URLSearchParams();
  //   if (newCity.id) params.append('city', newCity.id);
  //   if (newProperty.id) params.append('property_type', newProperty.id);
  //   if (newProjectId.trim()) params.append('project_id', newProjectId.trim());
  //   navigate(`/search-Listing?${params.toString()}`);
  
  //   // Trigger new search with updated filters
  //   const payload = {};
  //   if (newCity.id) payload.city = newCity.id.toString();
  //   if (newProperty.id) payload.property_type = newProperty.id.toString();
  //   if (newProjectId.trim()) payload.project_id = newProjectId.trim();
  //   payload.page = 1;
  //   payload.per_page = 6;
  
  //   setSearchLoading(true);
  //   axios
  //     .post(`${baseUrl}/api/project-search`, payload, {
  //       headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         setSearchResults(response.data.data);
  //         setHasMore(response.data.data.length >= 6 && response.data.data.length < totalProjects);
  //         setPage(1);
  //         setDisplayCount(6);
  //       } else {
  //         setSearchError(response.data.message || 'Search failed.');
  //       }
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching search results:', error);
  //       setSearchError('Failed to fetch search results.');
  //     })
  //     .finally(() => {
  //       setSearchLoading(false);
  //     });
  // };

  const clearFilter = (filter) => {
    let newCity = { ...selectedCity };
    let newProperty = { ...selectedProperty };
    let newProjectId = projectId;
  
    if (filter === 'city') {
      newCity = { id: null, name: 'City' };
      setSelectedCity(newCity);
    } else if (filter === 'property') {
      newProperty = { id: null, name: 'Property Type' };
      setSelectedProperty(newProperty);
      setSortKey(null); // Reset sortKey to show "All Property Types"
    } else if (filter === 'project_id') {
      newProjectId = '';
      setProjectId(newProjectId);
    }
  
    // Update URL
    const params = new URLSearchParams();
    if (newCity.id) params.append('city', newCity.id);
    if (newProperty.id) params.append('property_type', newProperty.id);
    if (newProjectId.trim()) params.append('project_id', newProjectId.trim());
    navigate(`/search-Listing?${params.toString()}`);
  
    // Trigger search
    const payload = {};
    if (newCity.id) payload.city = newCity.id.toString();
    if (newProperty.id) payload.property_type = newProperty.id.toString();
    if (newProjectId.trim()) payload.project_id = newProjectId.trim();
    payload.page = 1;
    payload.per_page = 6;
  
    setSearchLoading(true);
    axios
      .post(`${baseUrl}/api/project-search`, payload, {
        headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data.success) {
          setSearchResults(response.data.data);
          setHasMore(response.data.data.length >= 6 && response.data.data.length < totalProjects);
          setPage(1);
          setDisplayCount(6);
        } else {
          setSearchError(response.data.message || 'Search failed.');
        }
      })
      .catch((error) => {
        console.error('Error fetching search results:', error);
        setSearchError('Failed to fetch search results.');
      })
      .finally(() => {
        setSearchLoading(false);
      });
  };

  const mappedProjects = searchResults.map((project) => ({
    id: project.id,
    title: project.name || 'Untitled Project',
    slug: generateSlug(project.name), // Generate slug from name
    price: project.tag_price ? `₹${project.tag_price}` : 'Price on Request',
    location: project.address || 'Unknown Location',
    size: project.specification || 'N/A',
    feet: project.disclaimer || 'N/A',
    image: project.hero_img || 'https://via.placeholder.com/300',
  }));

  return (
    <main className="search-listing">
      <section className="Main-banner listing-maina" data-speed="1.5">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="top-co align-items-center">
              <h1 className="animate__animated animate__fadeInLeft">
                Explore Project in {selectedCity.name !== 'City' ? selectedCity.name : 'Your City'}
              </h1>
              <p>
                Explore expert blogs on buying, selling, investing, and living
                in your perfect space. Knowledge that moves with the market.
              </p>
            </Col>
            <Col md={6}>
              <img src={Bg} className="img-fluid" alt="Banner" />
            </Col>
          </Row>
        </Container>
        <div className="d-flex align-items-md-center searc-bar home-serch justify-content-between searchlisting-bar">
          <DropdownButton
            id="dropdown-city"
            title={selectedCity.name}
            variant="outline-light"
            className="me-2 set-out"
          >
            {cities.length > 0 ? (
              cities.map((city) => (
                <Dropdown.Item
                  key={city.id}
                  onClick={() => handleCitySelect(city)}
                >
                  {city.name}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item disabled>No cities available</Dropdown.Item>
            )}
          </DropdownButton>

          <DropdownButton
            id="dropdown-property"
            title={selectedProperty.name}
            variant="outline-light"
            className="me-2 set-out"
          >
            {propertyTypes.length > 0 ? (
              propertyTypes.map((property) => (
                <Dropdown.Item
                  key={property.id}
                  onClick={() => handlePropertySelect(property)}
                >
                  {property.name}
                </Dropdown.Item>
              ))
            ) : (
              <Dropdown.Item disabled>No property types available</Dropdown.Item>
            )}
          </DropdownButton>

          <InputGroup className="me-2">
            <InputGroup.Text>
              <img src={Search} alt="Search" />
            </InputGroup.Text>
            <Form.Control
              // placeholder="Search by Developer or Project"
              placeholder="Search by Project ID"
              aria-label="Project ID"
              aria-describedby="basic-addon1"
              value={projectId}
              onChange={handleProjectIdInput}
            />
          </InputGroup>

          <Button
            className="all-same-ani"
            variant="primary"
            onClick={() => handleSearch(1)}
            disabled={searchLoading}
          >
            {searchLoading ? 'Searching...' : 'Search'}
          </Button>
        </div>
      </section>

      <section className="Blog-listing">
  <Container>
    <Row className="blog-select mb-5">
      <Col md={6}>
        {console.log('Filter States:', { selectedCity, selectedProperty, projectId })}
        <Button
          variant="dark"
          className={`latest filter ${selectedCity.id ? 'active' : ''}`}
          onClick={() => clearFilter('city')}
        >
          {selectedCity.name}
          {selectedCity.id && <img src={Plus} className="pluss" alt="Clear" />}
        </Button>
        <Button
          variant="dark"
          className={`latest filter ${selectedProperty.id ? 'active' : ''}`}
          onClick={() => clearFilter('property')}
        >
          {selectedProperty.name}
          {selectedProperty.id && <img src={Plus} className="pluss" alt="Clear" />}
        </Button>
        <Button
          variant="dark"
          className={`latest filter ${projectId ? 'active' : ''}`}
          onClick={() => clearFilter('project_id')}
        >
          {projectId || 'Property ID'}
          {projectId && <img src={Plus} className="pluss" alt="Clear" />}
        </Button>
      </Col>
      <Col md={6} className="search-filterr">
      <DropdownButton
  id="Sort by"
  title={selectedProperty.id ? selectedProperty.name : 'Sort By'}  // Show 'Sort By' initially, or the selected name afterward
  variant="outline-light"
  className="me-2 sortby"
>
  {propertyTypes.length > 0 ? (
    propertyTypes.map((propertyType) => (
      <Dropdown.Item
        key={propertyType.id}
        onClick={() => handleSort(propertyType.id)}
      >
        {propertyType.name}
      </Dropdown.Item>
    ))
  ) : (
    <Dropdown.Item disabled>No property types available</Dropdown.Item>
  )}
</DropdownButton>

        {/* <p className="Bysearch">by search Result : {searchResults.length}</p> */}
        <p className="Bysearch">by search Result : {searchResults.length}</p>
      </Col>
    </Row>
  </Container>
</section>

<section className="featured listing-mania pt-4">
  <Container className="full">
    {searchError && <div className="text-danger mb-3">{searchError}</div>}
    {mappedProjects.length > 0 ? (
      <>
        {/* Helper Function */}
        {(() => {
          const truncateToThreeWords = (text) => {
            if (!text) return '';
            return text.split(' ').slice(0, 3).join(' ');
          };

          // Calculate the number of projects to display (limited by displayCount)
          const projectsToDisplay = mappedProjects.slice(0, Math.min(displayCount, mappedProjects.length));

          // Group projects into rows of 3
          const rows = [];
          for (let i = 0; i < projectsToDisplay.length; i += 3) {
            const rowProjects = projectsToDisplay.slice(i, i + 3);
            rows.push(
              <Row key={`row-${i}`} className="features-row listing-ki mt-5">
                {rowProjects.map((project, index) => (
                  <Col key={project.id} className="features-list p-0 dip-column" md={4}>
                    <Card className={`custom-card card-${index} box-${index}`}>
                      <Card.Img variant="top" 
                      // src={project.image}
                      src={project.image || 'https://admin.sloc.in/feature_image/1745473057_f1.png'}
                      alt={project.title} />
                      <Card.Body className="uper-space">
                        <Card.Text className="mb-4 btn-loc">
                          {project.size && project.size !== 'N/A' && <span>{truncateToThreeWords(project.size)}</span>}
                          {project.feet && project.feet !== 'N/A' && <span>{truncateToThreeWords(project.feet)}</span>}
                          {project.location && project.location !== 'N/A' && <span>{truncateToThreeWords(project.location)}</span>}
                        </Card.Text>
                        <Card.Title>{project.title}</Card.Title>
                        <Card.Text className="text-primary font-weight-bold">{project.price}</Card.Text>
                        <Button as={Link} to={`/project/${project.slug}`} className="Up-arrow-btn">
                          <img src={Arrow} alt="Arrow" />
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            );
          }

          return (
            <>
              {rows}
              {/* Load More Button */}
              {hasMore && displayCount < mappedProjects.length && (
                <Row className="align-items-center justify-content-center mt-5">
                  <Button
                    variant="dark"
                    className="load-more"
                    onClick={handleLoadMore}
                    disabled={searchLoading}
                  >
                    Load More
                  </Button>
                </Row>
              )}
            </>
          );
        })()}
      </>
    ) : (
      !searchLoading && !searchError && <p>No results found.</p>
    )}
  </Container>
</section>
    </main>
  );
}

export default list;
