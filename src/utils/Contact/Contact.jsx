import React, { useEffect } from 'react'
import "./Contact.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let con = document.getElementById('corner-contact')
            if (window.scrollY > 200) {
                con.classList.remove('active')
            } else {
                con.classList.add('active')
            }
        })
    }, [])
  return (
    <div className='corner-contact active' id="corner-contact">
        <ul className="list-unstyled">
            <li>
                <a href="#">
                <FontAwesomeIcon className="-mb-2" icon={faWhatsapp} />
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon className="-mb-2" icon={faEnvelope} />
                </a>
            </li>
            <li>
                <a href="#">
                <FontAwesomeIcon className="-mb-2" icon={faArrowUp} />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Contact