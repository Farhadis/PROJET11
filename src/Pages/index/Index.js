import React from "react";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import Feature from "../../components/Features/Feature"
import money from "../../assets/icon-money.png"
import chat from "../../assets/icon-chat.png"
import security from "../../assets/icon-security.png"



const Index = () => {
    return (
        <>
            <Header />

            <div className="hero">
              <section className="hero-content">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="subtitle">No fees.</p>
                <p className="subtitle">No minimum deposit.</p>
                <p className="subtitle">High interest rates.</p>
                <p className="text">Open a savings account with Argent Bank today!</p>
              </section>
            </div>

            <div className="features">
                <h2 className="sr-only">Features</h2>

                <Feature 
                    image={chat}
                    title= {'You are our #1 priority'}
                    para= {'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'}
                />

                <Feature 
                    image={money}
                    title= {'More savings means higher rates'}
                    para= {' The more you save with us, the higher your interest rate will be!'}
                />
               
                <Feature 
                     image={security}
                     title= {'Security you can trust'}
                     para= {'We use top of the line encryption to make sure your data and money is always safe'}
                />

            </div>

            <Footer/>
        
        
        </>
    )
}

export default Index