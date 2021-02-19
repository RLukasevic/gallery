import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Gallery = () => {

  const [maxPages, setMaxPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState();

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll);
        fetchImages()

        return () => {
			window.removeEventListener("scroll", infiniteScroll);
		};
    }, [])

    const fetchImages = (page) => {
      let url = 'http://localhost:3232/api/getImages?page=' + (page || 1);
      axios.get(url)
        .then(res=> res.data)
        .then(data => {
          setImages(data.paginatedData)
          setMaxPages(data.maximumPages)
      })
    }

    const fetchNewImages = (page) => {
      let url = 'http://localhost:3232/api/getImages?page=' + (page || 1);
      console.log(images)
      axios.get(url)
        .then(res=> res.data)
        .then(data => {
        //   if (newImages === undefined) {
        //     console.log('undef')
        //   } else {
          for (let item in data.paginatedData) {
            images.push(data.paginatedData[item])
          }
          setImages(images)
          setMaxPages(data.maximumPages)
      })
    }

    const infiniteScroll = () => {
      console.log(window.innerHeight)
      console.log(window.pageYOffset)
      console.log(document.documentElement.offsetHeight)
      if (window.innerHeight + document.documentElement.scrollTop - 17 === document.documentElement.offsetHeight) {
         let newPage = currentPage;
         newPage++;
         setCurrentPage(newPage)
         fetchNewImages(newPage);
         }
      }

  return (
    <div className='row flex-column'>
      {images ? 
        images.map(item => {
          return <img className='col sm-6' src={item.url} key={item.id} />
        }) : null} 
    </div>
  );
}

export default Gallery;
