import React from "react";
import { ReactComponent as Reaction } from "./svg/icon-reaction.svg";
import { ReactComponent as Memory } from "./svg/icon-memory.svg";
import { ReactComponent as Verbal } from "./svg/icon-verbal.svg";
import { ReactComponent as Visual } from "./svg/icon-visual.svg";
export default function Card() {
   return (
      <div className="cards">
         <div className="container">
            <div className="d-flex align-items-center justify-content-center card-wrap">
               <div className="col-lg-8 col-12 col-md-10 ll  shadow ">
                  <div className="row">
                     {/* Result Column */}
                     <div className="col-lg-6 col-md-6 col-12">
                        <div className="result pb-4">
                           <div className="r-head p-4 text-center">
                              <span className="text-white text-opacity-75 fw-bold">
                                 Your result
                              </span>
                           </div>
                           <div className="d-flex justify-content-center">
                              <div className="r-circle rounded-circle text-white text-center">
                                 <h1 className="fw-bold">76</h1>
                                 <span className="text-white-50">of 100</span>
                              </div>
                           </div>
                           <div className="text-center">
                              <div className="py-3">
                                 <span className="text-white fw-bold fs-5 ">
                                    Great
                                 </span>
                              </div>
                              <div className="px-5 text-light text-opacity-75 my-auto">
                                 <span>
                                    You score higher than 65% of people who has taken this test
                                 </span>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* Summary Column */}
                     <div className="col-lg-6 col-md-6 col-12 bg-waring p-0\1">
                        <div className="summary">
                           <div className="container-fluid">
                              <div className="s-head py-4 fw-bold">
                                 <span>Summary</span>
                              </div>
                              {/* Reaction */}
                              <div className="s-rows my-2 bg-danger  bg-opacity-25 py-3 rounded">
                                 <div className="row">
                                    <div className="col-6 text-danger d-flex fw-bold">
                                       <i className="px-3">
                                          <Reaction />
                                       </i>{" "}
                                       <span>Reaction</span>
                                    </div>
                                    <div className="col-6 text-right px-4">
                                       <div>
                                          <span className="fw-bold">80</span>
                                          <span className="text-opacity-25"> / 100</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* Memory */}
                              <div className="s-rows my-2 bg-warning  bg-opacity-25 py-3 rounded">
                                 <div className="row">
                                    <div className="col-6 text-warning d-flex fw-bold">
                                       <i className="px-3">
                                          <Memory />
                                       </i>{" "}
                                       <span>Memory</span>
                                    </div>
                                    <div className="col-6 text-right px-4">
                                       <div>
                                          <span className="fw-bold">91</span>
                                          <span className="text-opacity-25"> / 100</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* Verbal */}
                              <div className="s-rows my-2 bg-success  bg-opacity-25 py-3 rounded">
                                 <div className="row">
                                    <div className="col-6 text-success d-flex fw-bold">
                                       <i className="px-3">
                                          <Verbal />
                                       </i>{" "}
                                       <span>Verbal</span>
                                    </div>
                                    <div className="col-6 text-right px-4">
                                       <div>
                                          <span className="fw-bold">61</span>
                                          <span className="text-opacity-25"> / 100</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>

                              {/* Visual */}
                              <div className="s-rows my-2 bg-primary  bg-opacity-25 py-3 rounded">
                                 <div className="row">
                                    <div className="col-6 text-primary d-flex fw-bold">
                                       <i className="px-3">
                                          <Visual />
                                       </i>{" "}
                                       <span>Visual</span>
                                    </div>
                                    <div className="col-6 text-right px-4">
                                       <div>
                                          <span className="fw-bold">72</span>
                                          <span className="text-opacity-25"> / 100</span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="s-btn mt-3 mb-4">
                                 <button className="btn btn-dark py-3 fw-bold rounded-pill col-12">
                                    Continue
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
