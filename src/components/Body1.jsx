import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import './Body.css'; 


import Rectange2 from '../assets/Rectangle 2.svg';
import Rectange41 from '../assets/Rectangle 4-1.svg';
import Rectange4 from '../assets/Rectangle 4.svg';
import Rectange51 from '../assets/Rectangle 5-1.svg';
import Rectange52 from '../assets/Rectangle 5-2.svg';
import Rectange5 from '../assets/Rectangle 5.svg';
import Rectangle34 from '../assets/Rectangle 34.svg';
import Rectangle7 from '../assets/Rectangle 7.svg';
import Rectangle9 from '../assets/Rectangle 9.svg';
import Rectangle11 from '../assets/Rectangle 11.svg';
import Rectangle15 from '../assets/Rectangle 15.svg';
import Rectangle17 from '../assets/Rectangle 17.svg';
import Rectangle21 from '../assets/Rectangle 21.svg';
import Rectangle22 from '../assets/Rectangle 22.svg';
import Rectangle23 from '../assets/Rectangle 23.svg';
import Rectangle37 from '../assets/Rectangle 37.svg';
import Rectangle55 from '../assets/Rectangle 55.svg';
import Rectangle57 from '../assets/Rectangle 57.svg';
import Rectangle58 from '../assets/Rectangle 58.svg';
import Rectangle64 from '../assets/Rectangle 64.svg';
import Rectangle67 from '../assets/Rectangle 67.svg';

const initialImages = [
    Rectange2,
    Rectange41,
    Rectange4,
    Rectange51,
    Rectange52,
    Rectange5,
    Rectangle34
];

const finalImages = [
    Rectangle7,
    Rectangle9,
    Rectangle11,
    Rectangle15,
    Rectangle17,
    Rectangle21,
    Rectangle22,
    Rectangle23,
    Rectangle37,
    Rectangle55,
    Rectangle57,
    Rectangle58,
    Rectangle64,
    Rectangle67
];

const Body1 = () => {
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const [events, setEvents] = useState([]);

    const containerRef1 = useRef(null);
    const [events1, setEvents1] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [allPagesFetched, setAllPagesFetched] = useState(false);

    // useEffect(() => {
    //     axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
    //         .then(response => {
    //             setEvents(response.data.events);
    //         })
    //         .catch(error => {
    //             console.error('Error fetching events:', error);
    //         });
    // }, []);

    useEffect(() => {
        const updatedImages = initialImages.map((image, index) => ({
            image,
            event: events[index]
        }));
        setImages(updatedImages);
    }, [events]);

    const handleScroll = () => {
        const container = containerRef.current;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
            setImages(prevImages => [
                ...prevImages,
                ...initialImages.map((image, index) => ({
                    image,
                    event: events[(prevImages.length + index) % events.length]
                }))
            ]);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, [currentPage]);

    const fetchEvents = () => {
        if (allPagesFetched || currentPage === 6) return;

        setLoading(true);
        axios.get(`https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${currentPage}&type=upcoming`)
            .then(response => {
                const newEvents = response.data.events;
                if (newEvents.length === 0) {
                    setAllPagesFetched(true);
                } else {
                    setEvents1(prevEvents => [...prevEvents, ...newEvents.map(event => ({
                        ...event,
                        formattedDate: new Date(event.date).toLocaleString()
                    }))]);
                    setCurrentPage(prevPage => prevPage + 1);
                    console.log(`Fetched data from page ${currentPage}`);
                }
            })
            .catch(error => {
                console.error('Error fetching upcoming events:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const handleScroll1 = () => {
        const container = containerRef1.current;
        if (container.scrollHeight - container.scrollTop === container.clientHeight) {
            fetchEvents();
        }
    };

    const approximateDistance = (distanceKm) => {
        if (distanceKm < 1) {
            return "< 1 km";
        } else if (distanceKm < 10) {
            return Math.round(distanceKm) + " km";
        } else {
            return Math.round(distanceKm / 10) * 10 + " km";
        }
    };

    return (
        <div className="container text-center mt-5 discover">
            <div className="row">
                <div className="col mt-5">
                    <h1>Discover Exciting Events Happening</h1>
                    <h1>Near You - Stay Tuned for Updates</h1>
                </div>
            </div>

            <div className="row mt-4">
                <div className="col mt-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam reprehenderit animi molestiae dolores minus consequatur. Quo ipsa aut fugit nihil dignissimos harum odio repellendus necessitatibus unde, accusamus autem repudiandae culpa ex eos nesciunt inventore? Fugit rem quidem consectetur nam dolorem culpa nulla impedit nesciunt, soluta ut ullam consequuntur accusamus optio!</p>
                </div>
            </div>

            <div className="row gx-1 mt-5">
                <div className="col-2 mt-5">
                    <p>Recommended Shows</p>
                </div>
                <div className="col-1 mt-5">
                    <i className='fas fa-arrow-right' style={{ fontSize: '24px', color: 'white' }}></i>
                </div>
            </div>

            <div className="container mt-5" style={{ overflowX: 'scroll', whiteSpace: 'nowrap' }} onScroll={handleScroll} ref={containerRef}>
                {images.map(({ image, event }, index) => (
                    <div key={index} style={{ display: 'inline-block', marginRight: '20px', position: 'relative' }}>
                        <img src={image} alt={`Image ${index}`} className="scroll-image" style={{ width: '380px', height: 'auto' }} />
                        <div className="event-details" style={{ position: 'absolute', bottom: 0, left: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px' }}>
                            {event && (
                                <>
                                    <div className="row">
                                        <div className="col">
                                            <p style={{ marginBottom: '5px', fontSize: '15px' }}>{event.eventName}</p>
                                        </div>
                                        <div className="col">
                                            <p style={{ marginBottom: '5px', fontSize: '11px' }}>{event.date}</p>
                                        </div>
                                    </div>
                                    <div className="row gx-3">
                                        <div className="col">
                                            <i className='fas fa-map-marker-alt' style={{ marginRight: '10px' }}></i>
                                            <span style={{ marginBottom: '5px', fontSize: '11px' }}>{event.cityName}</span>
                                        </div>
                                        <div className="col mt-2">
                                            <p style={{ marginBottom: '5px', fontSize: '11px' }}>{event.weather} | {event.distanceKm}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="container mt-5" onScroll={handleScroll1} ref={containerRef1}>
                <div className="row gx-1 mt-5">
                    <div className="col-2 mt-5">
                        <p style={{ color: 'black' }}>Upcoming Events</p>
                    </div>
                    <div className="col-1 mt-5">
                        <i className='fas fa-arrow-right' style={{ fontSize: '24px', color: 'black' }}></i>
                    </div>
                </div>
                <div className="row">
                    {events1.map((event, index) => (
                        <div key={index} className="col-lg-4 mb-4">
                            <div className="card">
                                <div style={{ position: 'relative' }}>
                                    <img src={finalImages[index % finalImages.length]} className="card-img-top" alt={`Event ${index}`} />
                                    <p className="card-date" style={{ position: 'absolute', bottom: '1px', left: '10px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '0px' }}>{event.formattedDate}</p>
                                </div>
                                <div className="card-body d-flex flex-column justify-content-between">
                                    <div className="row">
                                        <div className="col">
                                            <p className="card-text" style={{ color: 'black', fontSize: '20px' }}>{event.eventName}</p>
                                        </div>
                                    </div>

                                    <div className="row  mt-2">
                                        <div className="col d-flex align-items-start">
                                            <p className="card-text" style={{ color: 'black', fontSize: '11px' ,marginTop:'10px'}}>
                                                <i className='fas fa-map-marker-alt' style={{ marginRight: '5px',paddingTop:'2px' }}></i> {event.cityName}
                                            </p>
                                        </div>
                                        <div className="col-6 ">
                                            <p className="card-text" style={{ color: 'black', fontSize: '11px', marginTop: '10px' }}>
                                                {event.weather} | {approximateDistance(event.distanceKm)}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                {loading && <i className="fa fa-spinner fa-spin" style={{ color: 'red' }}></i>}
            </div>
        </div>
    );
}

export default Body1;
