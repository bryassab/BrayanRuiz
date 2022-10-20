import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import '../pages/Homes.css';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import foto from '../images/img.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import millonarie from '../pages/millonarie.jpeg'
import Aviajes from '../pages/Aviajes.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPager, faHeart } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import NAvbar from '../Nab/Navbar';

export default function Home() {
    return (
        <><div>
            <NAvbar />
            <Grid container sx={{
                backgroundColor: '#ffff'
            }}>
                <Grid item xs={12} sm={12}>
                    <Box border={0}>
                        <section className='images' id='Home'>
                            <div className='inicio'>
                                <img className='img' src={foto} />
                                <h1 className='nombre'>Brayan Ruiz</h1>
                            </div>
                        </section>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box border={0}>
                        <section id='About'>
                            <div className='about'>
                                <h1 className='poco'> </h1>
                                <h3 className='description1'>Soy estudiante de Ingeniería Mecatronica, normalmente se dice que los ingenieros mecatrónicos estudian electrónica, programación, robótica industrial y más, pero a un nivel bajo (un poco de todo), pero en mi experiencia estudiando me vi más enfocado a la resolución de problemas comunes en las empresas y no solo a la robótica también a la gestión de proyectos y a la capacidad de unir a varias personas de otras ingenierías para llegar a un fin.
                                </h3>
                                <h3 className='description2'>
                                    Mi experiencia en la carrera respecto a la robótica me llevó a entrar en el mundo del desarrollo web ya que siempre observo las cosas de forma lógica aprendiendo diferentes lenguajes de programación que sigo aplicando para mis proyectos personales.
                                </h3>
                                <h3 className='description3'>
                                    Me apasiona la fotofrafia y tengo varios hobbies en los deportes de manera no profesional, me considero una persona responsable y proactiva con adaptabilidad a la tecnologia y asi mismo obteniendo aprendizaje nuevo que puede servir para la creacion de un proyecto.
                                </h3>
                            </div>
                        </section>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box border={0} >
                        <div className='fotos'>
                            <div className='sideShow'>
                                <Carousel>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img1}
                                            alt="First slide" />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img2}
                                            alt="Second slide" />

                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img3}
                                            alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img4}
                                            alt="Third slide" />
                                    </Carousel.Item>
                                    <Carousel.Item interval={2000}>
                                        <img
                                            className="d-block w-100"
                                            src={img5}
                                            alt="Third slide" />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box border={0} >
                        <section id='Conocimientos'>
                            <div className='brain'>
                                <ul className='lista'>
                                    <li>C</li>
                                    <li>C++</li>
                                    <li>Python</li>
                                    <li>Spring Boot</li>
                                    <li>Javascript</li>
                                    <li>SQL</li>
                                    <li>MySQL</li>
                                    <li>MONGOdb</li>
                                    <li>Css</li>
                                    <li>HTML</li>
                                    <li>Bootstrap</li>
                                    <li>React</li>
                                </ul>
                            </div>
                        </section>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} border={0}>
                    <Box border={0} >

                        <div className='informe'>
                            <div className='titulo'>
                                <h2>Conocimientos</h2>
                            </div>
                            <div className='informacion'>
                                <h3>Lo que aprendi es estos 5 años son proyectos repecto a la automatizacion y creacion de informes utilizando Latex, programas de simulacion y de prueba tanto de circuitos como de material, para ello se utilizaron programas como proteus con enlace a MATLAB-SIMULINK, SOLIDWORKS, programacion en arduino ya que se programan las targetas embebidas y microcontroladores como microchip y stm, para la creacion de los proyectos se utlizan metodolias agiles para la entrega de cada uno teniendo en cuenta varios datos como informes o encuestas para recaudar informacion, creacion de proyectos fisicos con materiales disponibles, utilizando varias maneras de generar un valor a cada uno.Graduado de tecnologo en automatizacion y robotica industrial.</h3>
                            </div>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12}>
                    <Box border={0} >
                        <section id='Proyectos'>
                            <div className='cards'>
                                <div className='ttitulo'>
                                    <h2>Proyectos</h2>
                                </div>
                                <div className='card'>
                                    <div className='imgBx'>
                                        <img src={millonarie} className='millonarie' />
                                    </div>
                                    <div className='descripcard'>
                                        <h3 className='descripcard'>Juego de preguntas de cultura general acerca del reciclaje</h3>
                                    </div>
                                    <div className='content'>
                                        <div className='details'>
                                            <ul className='icons'>
                                                <li><a href='https://millonarie.herokuapp.com/' target='_blank'><FontAwesomeIcon icon={faPager} /></a> </li>
                                                <li><a href='https://github.com/bryassab/QuizApp' target='_blank'><FontAwesomeIcon icon={faGithub} /></a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='card'>
                                    <div className='imgBx'>
                                        <img src={Aviajes} className='millonarie' />
                                    </div>
                                    <div className='descripcard'>
                                        <h3>CRUD de una agencia de viajes para administracion de solictudes</h3>
                                    </div>
                                    <div className='content'>
                                        <div className='details'>
                                            <ul className='icons'>
                                                <li><a href='https://viajer.herokuapp.com/' target='_blank'><FontAwesomeIcon icon={faPager} /></a> </li>
                                                <li><a href='https://github.com/bryassab/Viaje-R' target='_blank'><FontAwesomeIcon icon={faGithub} /></a> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} >
                    <Box border={2} >

                        <div className='final'>

                            <div className='informacionFinal'>
                                <h3>Copyright © Todos los derechos reservados | Portafolio hecho por Brayan ruiz <FontAwesomeIcon icon={faHeart} /></h3>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div></>
    );
}