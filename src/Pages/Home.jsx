import React,{useEffect,useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img4 from '../assets/img4.jpg'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductThunk } from '../Redux/productSlice'; 
import Spinner from 'react-bootstrap/Spinner';
import { nextPage,prevPage } from '../Redux/productSlice';


function Home() {


    const {products,error,loading,productsPerPage,currentPage}=useSelector((state)=>state.productReducer)

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchProductThunk())

    },[])

    const totalPage=Math.ceil(products?.length/productsPerPage)
    const lastPageIndex=currentPage*productsPerPage
    const firstPageIndex=lastPageIndex-productsPerPage
    const visibleProduct=products?.slice(firstPageIndex,lastPageIndex)

    const handleNext=()=>{
        if(currentPage<totalPage){
       dispatch(nextPage())
        }
    }

    const handlePrev=()=>{
        if(currentPage>1){
            dispatch(prevPage())
        }
    }


  return (
    <>


        <header className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">



                <Carousel>
      <Carousel.Item>
        <img src={img1} alt="img1" className='' width={'100%'} height={'400px'} />
       
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} alt="img1" className='' width={'100%'} height={'400px'} />

        
      </Carousel.Item>
      <Carousel.Item>
      <img src={img4} alt="img1" className='' width={'100%'} height={'400px'} />

      </Carousel.Item>
    </Carousel>


                </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    {
                        loading?
                    <h3>
                            <Spinner animation="border" role="status">
     
                          </Spinner>  
                          <span>Loading...</span>
                    </h3>              
                     
                      :
                      (error?
                        <h3>{error}</h3>

                        :

                        <>
                        {
                            visibleProduct?.map(item=>
                                ( 
                                    <div className="col mb-5">
                                    <div className="card h-100">
                                        <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                        <div className="card-body p-4">
                                            <div className="text-center">
                                                <h5 className="fw-bolder"> {item?.title}</h5>
                                                {item?.price}
                                            </div>
                                        </div>
                                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                            <div className="text-center">
                                              <Link to={`/view/${item.id}`} className='btn btn-outline-info'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>)

                            )
                        }
                       
                        </>
                        
                      )


                  
                    }


                   
                </div>
            </div>
        </section>

        <div className="mt-4 d-flex justify-content-center">
            <div>
                <button className='btn' onClick={handlePrev}>
                    <i className="fa-solid fa-angles-left">

                    </i>
                    </button>
                    {''}
                    {currentPage}/{totalPage}
                    {''}
                    <button className='btn' onClick={handleNext}>
                    <i className="fa-solid fa-angles-right">

                    </i>
                    </button>

               
            </div>
        </div>
    
    
    </>
  )
}

export default Home
