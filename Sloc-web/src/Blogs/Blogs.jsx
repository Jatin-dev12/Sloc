// import React from 'react'
// import { Row, Col , Button} from "react-bootstrap";
// import Container from "react-bootstrap/Container";
// import Arrow from "../assets/Imgs/up-arrow.svg";
// import blog1 from "../assets/Imgs/blog-1.png";
// import blog2 from "../assets/Imgs/blog-2.png";
// import { Card } from "react-bootstrap";
// import '../App.css'
// import { Link } from 'react-router-dom';

// import blog3 from "../assets/Imgs/blog-3.png";
// const Blogsdata = [
//   {
//     id: 1,
//     name: "Blog 1",
//     image: blog1,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 2,
//     name: "Blog 2",
//     image: blog2,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 3,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 4,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 5,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 6,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 7,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 8,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 9,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 10,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 11,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
//   {
//     id: 12,
//     name: "Blog 3",
//     image: blog3,
//     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ",
//     date: "1 March 19, 2024",
//     catagory: "Apartment",
//   },
// ];

// function Blogs() {
//   return (
//     <main className='blog-page'>

//      <section className="Main-banner Blogs-banner" data-speed="1.5">
//           <Container>
//             <Row>
//               <Col md={12} className='animate__animated animate__fadeInLeft' >
//                 <h1> Property<br/> Insights</h1>
//                 <p>From market trends to expert tips, we’ve got your back at every step.
//                 </p>
//               </Col>
//               <Col>



//               </Col>
//             </Row>
//           </Container>

//         </section>


//         <section className='Blog-listing'>
//             <Container>
//                 <Row className='blog-select mb-5'>
//                     <Col md={12}>
// <Button variant='dark' className='active'> All</Button>
// <Button variant='dark' className='latest'> Latest Blogs</Button>

// <Button variant='dark' className='latest'> Apartment</Button>

// <Button variant='dark' className='latest'> Villa</Button>

// <Button variant='dark' className='latest'> project</Button>


//                     </Col>
//                 </Row>
//             </Container>
//         </section>


//                 <section className="featured blogs  all-blogs" >
//                                   <Container className="">

//                     <Row>
//                       {Blogsdata.map((Blogsdata, index) => (
//                         <Col md={4} key={Blogsdata.id} className="features-list p-0" data-aos="fade-up" data-aos-easing="ease-in-sine"
// >
//                           {/* <Card className=" position-relative"> */}
//                           <Card

//                             className={`position-relative custom-card card-${index}  box-${index}`} // Added box classes
//                           >
//                             <Card.Img
//                               variant="top"
//                               src={Blogsdata.image}
//                               alt={Blogsdata.title}
//                             />
//                             <Card.Body className="uper-space">
//                               <Card.Text className="mb-4 btn-loc top-set">
//                                 <span className="black">{Blogsdata.date}</span>
//                                 <span>{Blogsdata.catagory} </span>
//                               </Card.Text>
//                               <Card.Title>{Blogsdata.name}</Card.Title>

//                               <Card.Text className="text-primary font-weight-bold">
//                                 {Blogsdata.text}
//                               </Card.Text>
//                               <Button className="Up-arrow-btn" href='/blog-detail'>
//                                 <img src={Arrow} />
//                               </Button>
//                             </Card.Body>
//                           </Card>
//                                                 </Col>
//                       ))}
//                     </Row>
//                   </Container>
//                 </section>

//                 </main>

//   )
// }

// export default Blogs;

import React, { useState, useEffect } from 'react';
import { Row, Col, Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Arrow from '../assets/Imgs/up-arrow.svg';
import blog1 from '../assets/Imgs/blog-1.png';
import blog2 from '../assets/Imgs/blog-2.png';
import blog3 from '../assets/Imgs/blog-3.png';
import '../App.css';

// Static fallback images
const fallbackImages = [blog1, blog2, blog3];

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All'); // State for category filter
  const stripHtmlAndTruncate = (html, maxLength = 100) => {
    if (!html) return 'No description available';

    // Remove HTML tags
    const plainText = html.replace(/<[^>]+>/g, '');

    // Remove extra whitespace and truncate
    const trimmedText = plainText.replace(/\s+/g, ' ').trim();
    return trimmedText.length > maxLength
      ? `${trimmedText.substring(0, maxLength)}...`
      : trimmedText;
  };
  // Function to generate slug
  const generateBlogsSlug = (name) => {
    return name
      ? name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
          .replace(/(^-|-$)/g, '') // Remove leading/trailing hyphens
      : 'untitled-blog'; // Fallback slug
  };

  // Fetch blogs from API
  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
    const apiUrl = `${baseUrl}api/blogs`;

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          console.log('Blogs fetched successfully:', response.data.data);
          const apiBlogs = response.data.data;

          // Map API response to the required blog structure
          const mappedBlogs = apiBlogs.map((blog, index) => ({
            id: blog.id || `blog-${index + 1}`,
            name: blog.name || 'Untitled Blog',
            slug: generateBlogsSlug(blog.name),
            image: blog.banner
              ? `${blog.banner}`
              : fallbackImages[index % fallbackImages.length],
            // text: blog.short_description || blog.description || 'No description available',
            text: stripHtmlAndTruncate(blog.short_description || blog.description, 100), // Strip HTML and truncate
            date: blog.created_at
              ? new Date(blog.created_at).toLocaleDateString('en-US', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })
              : 'Unknown Date',
            catagory: blog.keywords || 'General',
          }));

          setBlogs(mappedBlogs);
        } else {
          throw new Error('API response was not successful');
        }
      })
      .catch((error) => {
        console.error('Error fetching blogs:', error);
        setError('Failed to load blogs. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Handle filter change
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter blogs based on category
  const filteredBlogs =
    filter === 'All' ? blogs : blogs.filter((blog) => blog.catagory === filter);

  // Render loading state
  if (loading) {
    return (
      <Container className="text-center my-5">
        <h3>Loading blogs...</h3>
      </Container>
    );
  }

  // Render error state
  if (error) {
    return (
      <Container className="text-center my-5">
        <h3>{error}</h3>
      </Container>
    );
  }

  return (
    <main className="blog-page">
      {/* Banner Section */}
      <section className="Main-banner Blogs-banner" data-speed="1.5">
        <Container>
          <Row>
            <Col md={12} className="animate__animated animate__fadeInLeft">
              <h1>
                Property
                <br />
                Insights
              </h1>
              <p>
                From market trends to expert tips, we’ve got your back at every
                step.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Buttons Section */}
      <section className="Blog-listing">
        <Container>
          <Row className="blog-select mb-5">
            <Col md={12}>
              <Button
                variant="dark"
                className={filter === 'All' ? 'active' : 'latest'}
                onClick={() => handleFilterChange('All')}
              >
                All
              </Button>
              <Button
                variant="dark"
                className={filter === 'Latest' ? 'active' : 'latest'}
                onClick={() => handleFilterChange('Latest')}
              >
                Latest Blogs
              </Button>
              <Button
                variant="dark"
                className={filter === 'Apartment' ? 'active' : 'latest'}
                onClick={() => handleFilterChange('Apartment')}
              >
                Apartment
              </Button>
              <Button
                variant="dark"
                className={filter === 'Villa' ? 'active' : 'latest'}
                onClick={() => handleFilterChange('Villa')}
              >
                Villa
              </Button>
              <Button
                variant="dark"
                className={filter === 'project' ? 'active' : 'latest'}
                onClick={() => handleFilterChange('project')}
              >
                Project
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Blogs Listing Section */}
      <section className="featured blogs all-blogs">
        <Container>
          <Row>
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog, index) => (
                <Col
                  md={4}
                  key={blog.id}
                  className="features-list p-0"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-sine"
                >
                  <Card
                    className={`position-relative custom-card card-${index} box-${index}`}
                  >
                    <Card.Img
                      variant="top"
                      src={blog.image}
                      alt={blog.name}
                      onError={(e) =>
                        (e.target.src = fallbackImages[index % fallbackImages.length])
                      } // Fallback image on error
                    />
                    <Card.Body className="uper-space">
                      <Card.Text className="mb-4 btn-loc top-set">
                        <span className="black">{blog.date}</span>
                        <span>{blog.catagory}</span>
                      </Card.Text>
                      <Card.Title>{blog.name}</Card.Title>
                      <Card.Text className="text-primary font-weight-bold">
                        {blog.text}
                      </Card.Text>
                      <Button
                        className="Up-arrow-btn"
                        as={Link}
                        to={`/blog-detail/${blog.slug}`}
                      >
                        <img src={Arrow} alt="Read more" />
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            ) : (
              <Col md={12} className="text-center">
                <h4>No blogs found for this category.</h4>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default Blogs;
