import React, { Component } from 'react'
import Title from '../component/Title';
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa";

export default class Servces extends Component {
    state={
        servces:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'Lorem ipsum dolkdsn skdnjn ksdmckmdsk dknfnn kmdimfi idhvirhu skivsiv okoko !'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'Lorem ipsum dolkdsn skdnjn ksdmckmdsk dknfnn kmdimfi idhvirhu skivsiv okoko !'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:'Lorem ipsum dolkdsn skdnjn ksdmckmdsk dknfnn kmdimfi idhvirhu skivsiv okoko !'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'Lorem ipsum dolkdsn skdnjn ksdmckmdsk dknfnn kmdimfi idhvirhu skivsiv okoko !'
            }
        ]
    }
    render() {
        return (
        <section className="services">
            <Title title="Services"/>
              <div className="services-center">
                  {this.state.servces.map((item ,index) => {
                      return (
                          <article key={index} className="service">
                              <span>{item.icon}</span>
                                  <h6>{item.title}</h6>
                                    <p>{item.info}</p>
                          </article>
                      )
                  })}
                
              </div>
        </section>
        )
    }
}
