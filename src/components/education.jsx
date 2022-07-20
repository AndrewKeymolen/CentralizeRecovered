import React, { Component } from "react";
import french from "./../resources/TFE/FR_TFE_Andrew_Keymolen_3IG_2015_2016.pdf";
import english from "./../resources/TFE/EN_TFE_Andrew_Keymolen_3IG_2015_2016.pdf";
import defense from "./../resources/TFE/Project_presentation_Andrew_Keymolen.pdf";

export default class Education extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-education" data-section="education">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
                >
                {/*<span className="heading-meta">Education</span>*/}
                <h2 className="colorlib-heading animate-box">
                  Education & Certifications
                </h2>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
                >
                <div className="fancy-collapse-panel">
                  <div
                    className="panel-group"
                    id="accordion"
                    role="tablist"
                    aria-multiselectable="true"
                    >
                    <div className="panel panel-default">
                      <div className="panel-heading" role="tab" id="headingOne">
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            >
                            Bachelor's degree in Business Computing - 2013-2016
                          </a>
                        </h4>
                      </div>
                      <div
                        id="collapseOne"
                        className="panel-collapse collapse in"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        >
                        <div className="panel-body">
                          <div className="row">
                            <div className="col-md-6">
                              <p>
                                <b>
                                  <a href="https://www.henallux.be/">
                                    Haute École de Namur-Liège-Luxembourg
                                  </a>
                                  , IESN, Namur, BELGIUM
                                </b>
                              </p>
                            </div>
                            <div className="col-md-6">
                            <p>
                              <li>
                                Obtained with Great Distinction
                              </li>
                            </p>
                              <p>
                                <li>
                                  Thesis about the development of an Android
                                  support app for field agents, written in both{" "}
                                  <a href={french} download>
                                    French&nbsp;<i className="icon-download4"></i>
                                </a>{" "}
                                and{" "}
                                <a href={english} download>
                                  English&nbsp;<i className="icon-download4"></i>
                              </a>
                              , and{" "}
                              <a href={defense} download>
                                defended in English&nbsp;<i className="icon-download4"></i>
                            </a>
                          </li>
                        </p>
                        <p>
                          <li>
                            First semester spent at{" "}
                            <a href="https://www.vamk.fi/apply/">
                              {" "}
                              Vaasa’s University of Applied Sciences
                            </a>{" "}
                            in Finland as part of an Erasmus exchange
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingSix">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                      >
                      AgilePM Practitioner - May 2022
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseSix"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingSix"
                  >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <b>
                            APMG International, Online
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>Credential ID: 2001102346 09831554-01-AGY6</li>
                        </p>
                        <p>
                          <li>
                            <a href="https://www.credly.com/badges/d8bc7ae5-3293-49c0-bd1b-864433b32a39/public_url">
                              Credential URL
                            </a>
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFive">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                      >
                      AgilePM Foundation - September 2021
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseFive"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFive"
                  >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <b>
                            APMG International, Online
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>Credential ID: 2001048470 09792871-01-YJ8T</li>
                        </p>
                        <p>
                          <li>
                            <a href="https://www.credly.com/badges/d1e4b22a-8172-42de-b36b-5e1e01c74456">
                              Credential URL
                            </a>
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                      >
                      Scrum Master Certified (SMC) - May 2020
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                  >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <b>
                            SCRUMstudy - Accreditation Body for Scrum and
                            Agile, Online
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>Credential ID: 778594</li>
                        </p>
                        <p>
                          <li>
                            <a href="https://www.scrumstudy.com/certification/scrum-master-certification">
                              Credential URL
                            </a>
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div
                  className="panel-heading"
                  role="tab"
                  id="headingThree"
                  >
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                      >
                      Scrum Fundamentals Certified (SFC) - May 2020
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                  >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <b>
                            SCRUMstudy - Accreditation Body for Scrum and
                            Agile, Online
                          </b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>Credential ID: 781827</li>
                        </p>
                        <p>
                          <li>
                            <a href="https://www.scrumstudy.com/certification/scrum-fundamentals-certified">
                              Credential URL
                            </a>
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div
                  className="panel-heading"
                  role="tab"
                  id="headingFour"
                  >
                  <h4 className="panel-title">
                    <a
                      className="collapsed"
                      data-toggle="collapse"
                      href="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                      >
                      Associate Android Developer - October 2017
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseFour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                  >
                  <div className="panel-body">
                    <div className="row">
                      <div className="col-md-6">
                        <p>
                          <b>Google Developers, Online</b>
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <li>Credential ID: 10930233</li>
                        </p>
                        <p>
                          <li>
                            <a href="https://www.credential.net/245fbf31-3379-4e33-a7c2-22b1aa7d96e8">
                              Credential URL
                            </a>
                          </li>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/*<div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFour">
                <h4 className="panel-title">
                <a
                className="collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
                >
                Diploma in Information Technology
                </a>
                </h4>
                </div>
                <div
                id="collapseFour"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFour"
                >
                <div className="panel-body">
                <p>
                Far far away, behind the word{" "}
                <strong>mountains</strong>, far from the countries
                Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.
                </p>
                </div>
                </div>
                </div>

                <div className="panel panel-default">
                <div className="panel-heading" role="tab" id="headingFive">
                <h4 className="panel-title">
                <a
                className="collapsed"
                data-toggle="collapse"
                data-parent="#accordion"
                href="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
                >
                High School Secondary Education
                </a>
                </h4>
                </div>
                <div
                id="collapseFive"
                className="panel-collapse collapse"
                role="tabpanel"
                aria-labelledby="headingFive"
                >
                <div className="panel-body">
                <p>
                Far far away, behind the word{" "}
                <strong>mountains</strong>, far from the countries
                Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the
                coast of the Semantics, a large language ocean.
                </p>
                </div>
                </div>
                </div>*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
}
}
