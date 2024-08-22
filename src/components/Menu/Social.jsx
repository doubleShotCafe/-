import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6'
import { IoLocationOutline } from 'react-icons/io5'
import { RiTiktokLine } from 'react-icons/ri'

const Social = () => {
  return (
    <div class="social-menu">
    {/* <h2 className='font1 mb-3 '>Follow Us</h2> */}
    <ul >
      <li>
        <a title='Facebook' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.facebook.com/DoubleShot9" target="blank">
          <FaFacebook className='fab' /> </a>
      </li>
      <li>
        <a title='instagram' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.instagram.com/double.shot.cafe/" target="blank">
          <FaInstagram className='fab' /> </a>
      </li>
      <li>
        <a title='Tiktok' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.tiktok.com/@doubleshotcafe0" target="blank">
          <RiTiktokLine className='fab' />
        </a>
      </li>
      <li>
        <a title='community' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://www.facebook.com/groups/doubleshotcafe" target="blank">
          <FaPeopleGroup className='fab' />
        </a>
      </li>
      <li>
        <a title='location' className='d-flex' style={{ justifyContent: "center", alignItems: "center" }} href="https://maps.app.goo.gl/VCy4QQ89V6WtLiY66" target="blank">
          <IoLocationOutline className='fab' />

        </a>
      </li>
    </ul>
  </div>
  )
}

export default Social