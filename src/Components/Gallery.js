import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import * as actions from '../redux/actions/allActions';

const Gallery = () => {

    let loader = useRef(null);
    let images = useSelector(state => state.images);
    let error = useSelector(state => state.error);
    let loading = useSelector(state => state.loading);
    let page = useSelector(state => state.page);
    const dispatch = useDispatch();

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: "15px",
            threshold: 0
        };

        const observer = new IntersectionObserver(handleObserver, options);

        if (loader.current) {
            observer.observe(loader.current)
        }

        return () => {
            observer.unobserve(loader.current);
          };
    
    }, []);

    useEffect(() => {
        dispatch(actions.initFetchImages(page));
    }, [page])

    const handleObserver = (entities) => {
        const target = entities[0];
        if (target.isIntersecting) {   
            dispatch(actions.changePage())
        }
    }

  return (
        <div className='row flex-column'>

            {images ? 
                images.map(item => {
                return <img className='col sm-6' src={item.url} key={item.id} />
                }) : null
            } 

            <div className="loading" style={{display: "hidden", paddingLeft: "30px"}} ref={loader}>
                <h2>Loading More</h2>
            </div>
        </div>
    
  );
}

export default withRouter(Gallery);
