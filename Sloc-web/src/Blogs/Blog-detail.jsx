// import React from 'react';
// import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
// import Bl from '../assets/Imgs/Blog-detail.svg';
// import '../App.css'
// import { Link } from 'react-router-dom';

// const BlogSection = () => {
//   return (


//     <>

//     <section className='blog-detailss'>

//     <Container className="my-5">
//       <Row className="align-items-center">
//         <Col md={7} className='animate__animated animate__fadeInLeft'>
//           <div className="mb-2">
//             <Badge bg="" className="date">March 10, 2025</Badge>
//             <Badge bg="                                                                                                                                                                                                                                                                                                                                                     " className='apartmanet'>Architecture</Badge>
//           </div>
//           <h2 className="fw-bold blog-h mt-3 ">BLOG 1 HEADING</h2>
//           <p className="text-muted blog-p ">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//           <p className='author'><strong>Author:</strong> Ravi Prakash Sharma</p>
//         </Col>
//         <Col md={5}>
//           <Image
//             src={Bl} // Replace with actual image URL or import
//             alt="Blog Visual"
//             fluid

//           />
//         </Col>
//       </Row>

//     </Container>

//     </section>

//     <section className='blog-text'
//     >
//         <Container fluid className="">
//     <Row className=' justify-content-center'>
//         <Col md={10} className='all-border' data-aos="fade-up" data-aos-easing="ease-in-sine">
//           <p>
//           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
//           </p><br/>
//           <p>
//           At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.
//           </p>
//         </Col>
//       </Row>
//     </Container>
//     </section>

//     </>
//   );
// };

// export default BlogSection;



import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Badge, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Bl from '../assets/Imgs/Blog-detail.svg';
import '../App.css';
import { Helmet } from 'react-helmet';

const BlogSection = () => {
  const { slug } = useParams(); // Get the slug from the URL (e.g., 'asdf')
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const baseUrl = import.meta.env.VITE_BASE_URL || 'https://default-api-url.com/';
    const apiUrl = `${baseUrl}api/blogs`; // Adjust endpoint if needed

    axios
      .get(apiUrl, {
        headers: {
          Authorization: `Bearer AzlrVK30FVdEx0TwrRwqYrQTL`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          const apiBlogs = response.data.data;
          console.log('////////////////////',apiBlogs)
          // Find the blog with the matching slug
          const selectedBlog = apiBlogs.find(
            (b) =>
              b.name
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '') === slug
          );

          if (selectedBlog) {
            setBlog({
              id: selectedBlog.id,
              name: selectedBlog.name || 'Untitled Blog',
              image: selectedBlog.banner ? `${selectedBlog.banner}` : Bl,
              short_description:
                selectedBlog.short_description || 'No description available',
              description: selectedBlog.description || 'No description available',
              date: selectedBlog.created_at
                ? new Date(selectedBlog.created_at).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })
                : 'Unknown Date',
              category: selectedBlog.keywords || 'General',
              author: selectedBlog.author || 'Unknown Author',
            });
          } else {
            throw new Error('Blog not found');
          }
        } else {
          throw new Error('API response was not successful');
        }
      })
      .catch((error) => {
        console.error('Error fetching blog:', error);
        setError('Failed to load blog. Please try again later.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!blog) return <div>Blog not found</div>;

  return (
    <>
                 <Helmet>
             <meta property="og:title" content="Real Estate Blog | Property Tips & Market Updates India" />
             <meta property="og:description" content="Explore SLOC’s real estate blog for tips, market trends, and insights on buying and investing in property across India. Stay informed with expert advice." />
            </Helmet>
      <section className="blog-detailss">
        <Container className="my-5">
          <Row className="align-items-center">
            <Col md={7} className="animate__animated animate__fadeInLeft">
              <div className="mb-2">
                <Badge bg="" className="date">
                  {blog.date}
                </Badge>
                <Badge bg="" className="apartmanet">
                  {blog.category}
                </Badge>
              </div>
              <h2 className="fw-bold blog-h mt-3">{blog.name}</h2>
              <p className="text-muted blog-p">{blog.short_description}</p>
              <p className="author">
                {/* <strong>Author:</strong> {blog.author} */}
                <strong>Author:</strong> Admin

              </p>
            </Col>
            <Col md={5}>
              <Image src={blog.image} alt={blog.name} fluid />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="blog-text">
        <Container fluid>
          <Row className="justify-content-center">
            <Col md={10} className="all-border" data-aos="fade-up" data-aos-easing="ease-in-sine">
              {/* <p>{blog.description}</p> */}
              <div dangerouslySetInnerHTML={{ __html: blog.description }} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BlogSection;