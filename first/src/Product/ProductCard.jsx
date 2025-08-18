import React from 'react'

export const ProductCard = ({imageSrc,cardTitle,cardDesc,btnName}) => {
    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <img src={imageSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{cardTitle}</h5>
                    <p className="card-text">{cardDesc}</p>
                    <a href="#" className="btn btn-primary">{btnName}</a>
                </div>
            </div>
{/* sdfsadf */}
        </>
    )
}
