import React, { useEffect, useRef } from 'react';
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
            rootMargin: "30px",
            threshold: 1
        };

        const observer = new IntersectionObserver(handleObserver, options);

        if (loader.current) {
            observer.observe(loader.current)
        }
    
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
        <div className='row flex-column' style={{width: '100%', margin: '0px'}}>

            <div className='col-12' style={{padding: '0px'}}>
                {images ? 
                    images.map(item => {
                        return <img className='col-6' style={{padding: '0px', border: '1px solid black'}} src={item.url} key={item.id} />
                    }) : null
                } 
            </div>

            {page <= 10 && error === false ? 
                <div className="loading col-12 text-center" ref={loader}>
                    <h2>Loading Images</h2>
                </div> : null
            }

            {error ? 
                <div className='col-12 text-center' style={{color: 'red'}}>
                    Something went wrong, try again later
                </div> : null
            }
        </div>
    
  );
}

export default withRouter(Gallery);
