import React from 'react';

const FAQ = () => {

            return (
                <div className="space-y-4 lg:w-1/2 w-full mx-auto my-8">
                    <h2 className='text-3xl font-bold mb-2 text-center '>Frequently Asked Questions</h2>
                <details className="p-6 border-l-4 border-red-500 bg-gray-50 group" open>
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                    How do you keep budgets on track?
                    </h5>
              
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
              
                  <p className="mt-4 leading-relaxed text-gray-700">
                  We are meticulous about keeping track of everything we need to spend money on. ans :This is done by constant monitoring and updating spreadsheets, knowing where to prioritise spending and keeping aside a budget to cater for emergency contingencies.
                  </p>
                </details>
                <details className="p-6 border-l-4 border-red-500 bg-gray-50 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                    What factors do you consider when selecting a venue?
                    </h5>
              
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
              
                  <p className="mt-4 leading-relaxed text-gray-700">
                  We consider the size and capacity of venue needed for the number of guests, facilities provided, parking, technical needs and budget constraints. We visit venues to check on the quality of the facilities and liaise with clients, keeping them informed of decisions made.
                  </p>
                </details>
              
                <details className="p-6 border-l-4 border-red-500 bg-gray-50 group">
                  <summary className="flex items-center justify-between cursor-pointer">
                    <h5 className="text-lg font-medium text-gray-900">
                    What is your refund and cancellation policy?
                    </h5>
              
                    <span
                      className="flex-shrink-0 ml-1.5 p-1.5 text-gray-900 bg-white rounded-full sm:p-3"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>
              
                  <p className="mt-4 leading-relaxed text-gray-700">
                  We’re aware that sometimes things happen which are outside of your control. In the event of needing a refund for a cancelled event, do discuss this with your event planner as early as possible, before extra services and products may have been ordered. We will discuss our policies with you before entering into contracts and then liaise with you in the unfortunate event of an event being canceled. We believe it’s important that all parties are aware of their obligations and responsibilities.
                  </p>
                </details>
            
              </div>
            );
        }

        
        
    
   


export default FAQ;