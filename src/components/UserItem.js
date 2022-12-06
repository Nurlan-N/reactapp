import React, { Component } from 'react'


export class UserItem extends Component {
  render(props) {
    const {id,img,name,country,age,email,phone} = this.props
    return (
            <div className="col-lg-4 col-12">
                <div className="card ">
                    <img className='card-img-top' src={img} alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text">Country :{country}</p>
                        <p className="card-text">Age :{age}</p>
                        <p className="card-text">Phone :{phone}</p>
                        <a href="#" className="btn btn-primary">{email}</a>
                    </div>
                </div>
           </div>
    )
  }
}

export default UserItem