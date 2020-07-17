import React, { Component } from 'react'
import "./Footer.css"
import {FaFacebookF,FaInstagram,FaTwitter,FaWhatsapp} from "react-icons/fa"
export default class Footer extends Component {
    render() {
        return (
           <footer>
               <section className="footer">
                   <div className="container">
                       <div className="footer_items pt-4 py-4">
                           <div className="footer_item">
                               <h2 className="footer_item_title">Agentliyimiz</h2>
                               <ul className="items">
                                   <li className="item"><a href="/">Haqqımızda</a></li>
                                   <li className="item"><a href="/">Xidmətlər</a></li>
                                   <li className="item"><a href="/">Əlaqə</a></li>
                                   <li className="item"><a href="/">Qeydiyyat</a></li>
                               </ul>
                           </div>
                           <div className="footer_item">
                               <h2 className="footer_item_title">Xidmətlərimiz</h2>
                               <ul className="items">
                                   <li className="item"><a href="/">Haqqımızda</a></li>
                                   <li className="item"><a href="/">Xidmətlər</a></li>
                                   <li className="item"><a href="/">Əlaqə</a></li>
                                   <li className="item"><a href="/">Qeydiyyat</a></li>
                               </ul>
                           </div>
                           <div className="footer_item">
                               <h2 className="footer_item_title">Digital Xidmətlərimiz</h2>
                               <ul className="items">
                                   <li className="item"><a href="/">Haqqımızda</a></li>
                                   <li className="item"><a href="/">Xidmətlər</a></li>
                                   <li className="item"><a href="/">Əlaqə</a></li>
                                   <li className="item"><a href="/">Qeydiyyat</a></li>
                               </ul>
                           </div>
                           <div className="footer_item">
                               <h2 className="footer_item_title">Social Media</h2>
                               <ul className="items d-flex flex-md-column">
                                   <li className="item"><a href="/"><FaFacebookF/></a></li>
                                   <li className="item"><a href="/"><FaInstagram/></a></li>
                                   <li className="item"><a href="/"><FaTwitter/></a></li>
                                   <li className="item"><a href="/"><FaWhatsapp/></a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </section>
           </footer>
        )
    }
}
