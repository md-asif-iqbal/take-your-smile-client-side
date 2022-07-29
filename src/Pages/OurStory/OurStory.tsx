import React from "react";
import NavBar from "../shared/NavBar/NavBar";
import PageTitle from "../shared/PageTitle/PageTitle";
import Banner from "./Banner";
import Header from "./Header";
import "./OurStory.css";
const OurStory = () => {
  const ourStory = [
    {
      id: 1,
      img: "https://static.showit.co/400/CERvIM0gTYWkeOUUgZnZVA/101638/lizmichaelpreviews14.jpg",
      name: "Amelia & Tim",
      dis: "We wanted to send you a huge thank you for quite literally making the wedding of our dreams possible! From the beginning, you had the perfect sense for the vision that we wanted (but I'm sure never articulated as clearly as we could), and the final product was beyond our wildest dreams. Everything was so perfectly executed - we're still pinching ourselves that it actually happened and went so smoothly! You were able to stay on top of a million moving pieces, and did it all with a smile and such a positive attitude.",
    },
    {
      id: 2,
      img: "https://static.showit.co/400/1qzCy2gHSQaF52dXcL4dwA/101638/1517_2j8a0859.jpg",
      name: "Grace & Steve",
      dis: "Wedding planning for an engaged couple is practically a second job in itself, but Carolyn made sure that planning was seamless and stress-free. Carolyn doesn't miss ANY detail, for example, the day before the wedding, I asked Carolyn to place custom blankets on my seat and my husband's seat as a surprise to my husband. The blankets had quotes we say to each other. Low and behold, they were sitting nicely on both of our chairsThere are many planners,",
    },
    {
      id: 3,
      img: "https://static.showit.co/400/XVsZeJOLQ2mZxqrO3dN7tg/101638/lake_geneva_best_chicago_destination_wedding_planner_lk_events_-_19.jpg",
      name: "Sue (Mother of the Bride)",
      dis: "I cannot say enough about Lauren and her team. My daughter and her fiancé are living out of the country and I do not know how we would have managed without Lauren’s dedication to keeping us on track with contracts and help with finding the best vendors. Her kindness and efficiency made a complicated weekend with people coming in from out of the country so easy, as she took care of every detail. We think the world of her and my daughter had the most spectacular wedding!!",
    },
    {
      id: 4,
      img: "https://static.showit.co/400/eGVOFOlSSDiG6ExKmD6NyQ/101638/img_4035.jpg",
      name: "Farjana and Taslim Mahmud",
      dis: "We are big ideas/big picture type of people and without Carolyn we could have never pulled off our wedding. She took our big ideas and perfectly executed our dream into a reality. The hundreds of emails, coordination of all the vendors, the timelines, joining us at all of the vendor meetings, the last minute changes/updates and her mind reading abilities when I couldn't articulate properly what I wanted. Those things were all before the wedding day",
    },
    {
      id: 5,
      img: "https://static.showit.co/400/XVsZeJOLQ2mZxqrO3dN7tg/101638/lake_geneva_best_chicago_destination_wedding_planner_lk_events_-_19.jpg",
      name: "Muslima and Ismail",
      dis: "The main reasons that I wanted to work with a wedding planner were because I had no idea where to start planning a wedding, and even more, I wanted our families, friends and us to be able to relax and truly enjoy the wedding weekend. Nevertheless, my fiancé was not thrilled about the idea of hiring a planner, but he agreed to consider it, so we met with Lauren of LK Events. After meeting Lauren, I knew right away that we should to hire her, and the doubts that my fiancé had were gone as well.",
    },
    {
      id: 6,
      img: "https://static.showit.co/400/owNbvNXHRsm60ULifEKsMQ/101638/alyssia_and_jack_weedding_-_npp458.jpg",
      name: "Alyssia & Jack",
      dis: "I don't have the words to go into all the ways Carolyn and her team were beyond phenomenal, and I would like to thank her for all that she did for us and for our family. So many things could have gone wrong - i.e. COVID, tornados, intense families lol - but from day one Carolyn was professional, in control, kind, supportive, honest, transparent and just a generally lovely person to be working with. Our wedding was EXACTLY what we wanted and we couldn't be happier.",
    },
  ];
  return (
    <div className="background img">
      <PageTitle title="Our Story" />
      <NavBar/>
      {<Banner></Banner>}
      {<Header></Header>}
      <div className="font-mono grid gap-10 grid-cols-1 md:grid-cols-2 w-10/12 mx-auto mt-32">
        {ourStory.map((item) => (
          <div key={item.id} className="grid grid-cols-1 mb-20 md:grid-cols-2">
            <img className="w-56 h-80 mx-auto" src={item.img} alt="" />
            <div>
              <p className="text-md text-center mx-auto">{item.dis}</p>
              <h1 className="text-lg text-primary text-center italic font-bold mt-4">{item.name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurStory;
