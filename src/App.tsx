import React, { useState } from 'react';
import './App.css';
import Influencer from './components/influencers';

export interface IState{
  influencer: {
    profilePicture:  string
    username: string
    name: string
    biography: string
    userId: number
    // isFollowed: boolean
    followers: number
    following: number
    numPosts: number
    lastPost: string
    email: string
    website: string
   

  }[]
}

function App() {

  const [influencer, setInfluencer]=useState<IState['influencer']>([
    {
      
        profilePicture: "assets/pictures/saschafirtina.jpg",
        username: "saschafirtina",
        name: "Sascha Firtina",
        biography: "ENTREPRENEUR.. \nðŸ¥‡ working on the next big thing,\nðŸ traveling the world,\nâ˜€ï¸ Happiness is the key! â˜€ï¸\nðŸ“Berlin",
        followers: 13838,
        following: 361,
        userId: 1533777427,
        numPosts: 149,
        website: "",
        lastPost: "09/08/2018",
        email: "No email in bio",
       
      },
      {
        profilePicture: "assets/pictures/bluemaex.jpg",
        username: "bluemaex",
        name: "Max",
        biography: "Berlin and the rest of the world. iPhone only.",
        followers: 261,
        following: 229,
        userId: 34943222,
        numPosts: 1308,
        website: "",
        lastPost: "29/08/2018",
        email: "No email in bio",
        
      },
      {
        profilePicture: "assets/pictures/bluemaex.jpg",
        username: "bluemaex",
        name: "Max",
        biography: "Berlin and the rest of the world. iPhone only.",
        followers: 261,
        following: 229,
        userId: 34943222,
        numPosts: 1308,
        website: "",
        lastPost: "29/08/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/kanyewest.jpg",
        username: "kanyewest",
        name: "ye",
        biography: "",
        followers: 3984285,
        following: 1,
        userId: 3949224551,
        numPosts: 188,
        website: "",
        lastPost: "04/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/jxhannamadeleine.jpg",
        username: "jxhannamadeleine",
        name: "ð‰ðŽð‡ð€ððð€ ðŠðŽðŒðˆðð„ðŠ ðŸŒ¹",
        biography: "â€¢ german/czechia â€¢ '94 â€¢ðŸ“frankfurt â€¢\nâ€¢ ðŸ‘» msmoootley â€¢ ðŸ“š student â€¢\nâ¥ sponsored by ironmaxx â€¢",
        followers: 81458,
        following: 555,
        userId: 226675238,
        numPosts: 247,
        website: "",
        lastPost: "02/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/beyonce.jpg",
        username: "beyonce",
        name: "BeyoncÃ©",
        biography: "",
        followers: 118448693,
        following: 0,
        userId: 247944034,
        numPosts: 1679,
        website: "http://www.BEYONCE.com/",
        lastPost: "03/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/nanonkaffeberlin.jpg",
        username: "nanokaffeeberlinXESKD",
        name: "nano kaffee berlin",
        biography: "kaffeebar | beans | utensils \nspecialty coffee in Berlin Kreuzberg | \nMo - Fr 8.30 - 18.00\nSat 12.00 - 17.00\nSun closed",
        followers: 4315,
        following: 892,
        userId: 1537710537,
        numPosts: 640,
        website: "http://www.nano-kaffee.de/shop",
        lastPost: "06/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/chapteronecoffeeberlin.jpg",
        username: "chapteronecoffeeberlin",
        name: "Chapter One Coffee Berlin",
        biography: "Mittenwalder Str.30, 10961 Berlin, mo-sa: 9.00-18.00/so: 11.00-18.00",
        followers: 2731,
        following: 1199,
        userId: 1534537685,
        numPosts: 321,
        website: "http://www.chapter-one-coffee.com/",
        lastPost: "11/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/saschafirtina.jpg",
        username: "saschafirtina-copy",
        name: "Sascha Firtina",
        biography: "ENTREPRENEUR.. \nðŸ¥‡ working on the next big thing,\nðŸ traveling the world,\nâ˜€ï¸ Happiness is the key! â˜€ï¸\nðŸ“Berlin",
        followers: 13838,
        following: 361,
        userId: 1533777427,
        numPosts: 149,
        website: "",
        lastPost: "09/08/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/marin.ivankovic.jpg",
        username: "marin.ivankovic-copy",
        name: "Marin",
        biography: "Just a guy, who decided to go for it\nâ€”\nðŸ“ ðŸ‡­ðŸ‡· living in Berlin ðŸ‡©ðŸ‡ª\nðŸš€ Startups | Fashion | Fitness\nðŸ‘» Snapchat: mrn_kovic",
        followers: 26561,
        following: 454,
        userId: 274836879,
        numPosts: 808,
        website: "",
        lastPost: "01/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/bluemaex.jpg",
        username: "bluemaex-copy",
        name: "Max",
        biography: "Berlin and the rest of the world. iPhone only.",
        followers: 261,
        following: 229,
        userId: 34943222,
        numPosts: 1308,
        website: "",
        lastPost: "29/08/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/kanyewest.jpg",
        username: "kanyewest-copy",
        name: "ye",
        biography: "",
        followers: 3984285,
        following: 1,
        userId: 39492245510,
        numPosts: 188,
        website: "",
        lastPost: "04/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/jxhannamadeleine.jpg",
        username: "jxhannamadeleine-copy",
        name: "ð‰ðŽð‡ð€ððð€ ðŠðŽðŒðˆðð„ðŠ ðŸŒ¹",
        biography: "â€¢ german/czechia â€¢ '94 â€¢ðŸ“frankfurt â€¢\nâ€¢ ðŸ‘» msmoootley â€¢ ðŸ“š student â€¢\nâ¥ sponsored by ironmaxx â€¢",
        followers: 81458,
        following: 555,
        userId: 2266752380,
        numPosts: 247,
        website: "",
        lastPost: "02/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/beyonce.jpg",
        username: "beyonce-copy",
        name: "BeyoncÃ©",
        biography: "",
        followers: 118448693,
        following: 0,
        userId: 2479440340,
        numPosts: 1679,
        website: "http://www.BEYONCE.com/",
        lastPost: "03/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/nanonkaffeberlin.jpg",
        username: "nanokaffeeberlin",
        name: "nano kaffee berlin",
        biography: "kaffeebar | beans | utensils \nspecialty coffee in Berlin Kreuzberg | \nMo - Fr 8.30 - 18.00\nSat 12.00 - 17.00\nSun closed",
        followers: 4315,
        following: 892,
        userId: 15377105370,
        numPosts: 640,
        website: "http://www.nano-kaffee.de/shop",
        lastPost: "06/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/chapteronecoffeeberlin.jpg",
        username: "chapteronecoffeeberlin-copy",
        name: "Chapter One Coffee Berlin",
        biography: "Mittenwalder Str.30, 10961 Berlin, mo-sa: 9.00-18.00/so: 11.00-18.00",
        followers: 2731,
        following: 1199,
        userId: 15345376850,
        numPosts: 321,
        website: "http://www.chapter-one-coffee.com/",
        lastPost: "11/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/saschafirtina.jpg",
        username: "saschafirtina-copy2",
        name: "Sascha Firtina",
        biography: "ENTREPRENEUR.. \nðŸ¥‡ working on the next big thing,\nðŸ traveling the world,\nâ˜€ï¸ Happiness is the key! â˜€ï¸\nðŸ“Berlin",
        followers: 13838,
        following: 361,
        userId: 1533777427,
        numPosts: 149,
        website: "",
        lastPost: "09/08/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/marin.ivankovic.jpg",
        username: "marin.ivankovic-copy2",
        name: "Marin",
        biography: "Just a guy, who decided to go for it\nâ€”\nðŸ“ ðŸ‡­ðŸ‡· living in Berlin ðŸ‡©ðŸ‡ª\nðŸš€ Startups | Fashion | Fitness\nðŸ‘» Snapchat: mrn_kovic",
        followers: 26561,
        following: 454,
        userId: 274836879,
        numPosts: 808,
        website: "",
        lastPost: "01/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/bluemaex.jpg",
        username: "bluemaex-copy2",
        name: "Max",
        biography: "Berlin and the rest of the world. iPhone only.",
        followers: 261,
        following: 229,
        userId: 349432222,
        numPosts: 1308,
        website: "",
        lastPost: "29/08/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/kanyewest.jpg",
        username: "kanyewest-copy2",
        name: "ye",
        biography: "",
        followers: 3984285,
        following: 1,
        userId: 394922455102,
        numPosts: 188,
        website: "",
        lastPost: "04/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/jxhannamadeleine.jpg",
        username: "jxhannamadeleine-copy2",
        name: "ð‰ðŽð‡ð€ððð€ ðŠðŽðŒðˆðð„ðŠ ðŸŒ¹",
        biography: "â€¢ german/czechia â€¢ '94 â€¢ðŸ“frankfurt â€¢\nâ€¢ ðŸ‘» msmoootley â€¢ ðŸ“š student â€¢\nâ¥ sponsored by ironmaxx â€¢",
        followers: 81458,
        following: 555,
        userId: 22667523802,
        numPosts: 247,
        website: "",
        lastPost: "02/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/beyonce.jpg",
        username: "beyonce-copy2",
        name: "BeyoncÃ©",
        biography: "",
        followers: 118448693,
        following: 0,
        userId: 24794403402,
        numPosts: 1679,
        website: "http://www.BEYONCE.com/",
        lastPost: "03/10/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/nanonkaffeberlin.jpg",
        username: "nanokaffeeberlin-copy2",
        name: "nano kaffee berlin",
        biography: "kaffeebar | beans | utensils \nspecialty coffee in Berlin Kreuzberg | \nMo - Fr 8.30 - 18.00\nSat 12.00 - 17.00\nSun closed",
        followers: 4315,
        following: 892,
        userId: 153771053702,
        numPosts: 640,
        website: "http://www.nano-kaffee.de/shop",
        lastPost: "06/09/2018",
        email: "No email in bio"
      },
      {
        profilePicture: "assets/pictures/chapteronecoffeeberlin.jpg",
        username: "chapteronecoffeeberlin-copy2",
        name: "Chapter One Coffee Berlin",
        biography: "Mittenwalder Str.30, 10961 Berlin, mo-sa: 9.00-18.00/so: 11.00-18.00",
        followers: 2731,
        following: 1199,
        userId: 153453768520,
        numPosts: 321,
        website: "http://www.chapter-one-coffee.com/",
        lastPost: "11/09/2018",
        email: "No email in bio"
      }
    
  ])

  const onfolow = ()=>{
    alert()
}
  return (
    <div className="App">

      <h2>influencer app</h2>
      < Influencer influencer={influencer} />



    </div>
  );
}

export default App;
