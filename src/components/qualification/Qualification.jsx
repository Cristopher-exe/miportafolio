import React from 'react'
import "./qualification.css"

const Qualification = () => {
  return (
    <section className="qualification section">
        <h2 className="section__title">Ruta</h2>
        <span className="section__subtitle"></span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex">
                    <i className="uil uil-graduation-cap qualification__icon"></i> Educación
                </div>

                <div className="qualification__button button--flex">
                    <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experiencia
                </div>
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Design</h3>
                            <span className="qualification__subtitle">México - Universidad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">Art Director</h3>
                            <span className="qualification__subtitle">México - Universidad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Development</h3>
                            <span className="qualification__subtitle">México - Universidad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        {/*hola*/}
                        <div>
                            <h3 className="qualification__title">UX Expert</h3>
                            <span className="qualification__subtitle">México - Universidad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2017 - 2018
                            </div>
                        </div>
                    </div>
                </div>

                {/*======================================qualification__content================================================*/}

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Product Designer</h3>
                            <span className="qualification__subtitle">México - Universidad</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>

                    <div className="qualification__data">
                        <div></div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                        <div>
                            <h3 className="qualification__title">UX Designer</h3>
                            <span className="qualification__subtitle">Apple Inc - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Web Designer</h3>
                            <span className="qualification__subtitle">Figma - Spain</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>
                        
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification