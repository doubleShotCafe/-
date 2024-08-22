import React from 'react'

const SingleItem = ({ item  , index , cardRefs}) => {
    let price = item.price.toString();
    let parts = price.split('-');
    let result1 = parts[0];
    let result2 = parts[1];
    return (
        <div key={item.id} className="col-6 col-md-4 mb-4">
            <div className="card menu-card " ref={el => cardRefs.current[index] = el}>
                <img src={`${item.image}`} className="card-img-top1" alt={item.name} />
                <div className="card-body text-center">
                    <h5 style={item.name.length > 8 ? { fontSize: "1.2rem" } : { fontSize: "1.3rem" }} className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <div className=''>

                        <div className='' style={{ gap: "33px" }}>
                            <div className='d-flex align-items-center justify-content-around'>
                                <p className='color1 mb-0' style={{ fontSize: "16px" }}>Medium</p>
                                <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{ color: "white !important" }}>{result1}</h6>
                            </div>
                            <div className='d-flex align-items-center justify-content-around'>
                                <p className='color1 mb-0' style={{ fontSize: "16px" }}>Large</p>
                                <h6 className="card-subtitle mb-2 mt-0 btn btn-danger text-white" style={{ color: "white !important" }}>{result2 === ' none' ? "-" : result2}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleItem