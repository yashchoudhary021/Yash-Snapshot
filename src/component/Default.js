import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'

function Products() {

    const [data, setData] = useState([])
    const [filter, setFilter] = useState(data)
    const [loading, setLoading] = useState(false)

    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true)
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false)
                console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }
        getProducts();
    }, [])
    const Loading = () => {
        return (<>
            Loading...
        </>)
    }

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat)
        setFilter(updatedList)
    }

    const ShowProducts = () => {
        return (<>
            <div className='buttons d-flex justify-content-center mb-5 pb-5'>
                <div className="btn btn-outline-dark me-2" onClick={() => {
                    setFilter(data)
                }}>All</div>
                <div className="btn btn-outline-dark me-2" onClick={() => {
                    filterProduct("men's clothing")
                }}>Men's Clothing</div>
                <div className="btn btn-outline-dark me-2" onClick={() => {
                    filterProduct("women's clothing")
                }}>Women's Clothing</div>
                <div className="btn btn-outline-dark me-2" onClick={() => {
                    filterProduct("jewelery")
                }}>Jewelery</div>
                <div className="btn btn-outline-dark me-2" onClick={() => {
                    filterProduct("electronics")
                }}>Electronic</div>
            </div>
            {filter.map((e) => {
                return (<>
                    <img key={e.id} src={e.image} alt="" />
                </>)
            })}
        </>
        );
    }
    return (<>
        <Navbar/>
        {loading ? <Loading /> : <ShowProducts />}
    </>)
}
export default Products;
