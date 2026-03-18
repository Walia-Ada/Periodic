// Main info: // 
// let = this means you are getting a variable. this stores that data in the computer temporaliy, it does not display that on the webpage// 
// Variables = (no numbers, no keywords, nospaces, no hypends) Format = lowercase first letter, and uppercase second word. *variables cannot change* // 
// const (constants) = not changing// 
// var and let basically mean the same thing // 



function calculatePhase() {
    // Basically getting the date from the html //
     let inputDate = document.getElementById("inputDate").value;
     // this means where it says in my html id="inputDate", it is grabbing that // 
     let firstDate = new Date(inputDate);
     //the date the user enters// 
     let today = new Date();
     // making today = the current date// 
     let timeDifference = today - firstDate;
     // the calulation occuring // 
     let daysDifference = timeDifference / (1000 * 60 * 60 * 24);
     // making sure it appears in days // 
 
     console.log("Difference in days: " + Math.floor(daysDifference) + " Days");
     // removes the decimals. btw console.log means that it is logging the information above into the log you can't see it// 
 
     // " let = Declares a block-scoped, local variable, optionally initializing it to a value." // 
     // “Grammar and Types - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types. // 
     // this displays the results on the page:// 
     let result;
     // object that stores the info about the menstural phases: like all the info underneath // 
     let phase;
     // refers to the actual phase they are in // 
 
     if (daysDifference < 5) {
         result = {
             // results are variables // 
             // “If...Else - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else. // 
             phase: "You are in your Menstrual Phase!",
             //  title description etc are properties/classes in these objects(basically like a class) that are orgnaizing the info //  
             // “JavaScript Properties.” Www.w3schools.com, www.w3schools.com/js/js_object_properties.asp#:~:text=Properties%20are%20the%20values%20associated. Accessed 22 Feb. 2024. //
             overview: "The Menstrual Phase typically lasts 3 to 7 days. The body will experience hormone shifts, namely, a slight rise in estrogen and a slight dip in progesterone. This affects energy levels, focus, and mood. Fatigue and cramps are common experiences. Prioritizing self-care and a lighter workload help manage symptoms effectively.",
             strengths: [
                 { title: "Enhanced Intuition", description: "During this phase, the right and left brain hemispheres communicate more effectively, leading to heightened intuition and reflective abilities." },
                 { title: "Opportunity for Reflection", description: "Low hormone levels provide a unique opportunity to reflect on the past month, evaluate performances, and consider any necessary course corrections in work and personal life as both analytical and intuitive reasoning is heightened." }
             ],
             challenges: [
                 { title: "Low Energy", description: "Hormonal fluctuations can lead to decreased energy, focus, and productivity levels." },
                 { title: "Fatigue", description: "Low levels of hormones during this phase contribute to feelings of fatigue and the need for additional rest." },
                 { title: "Mood Swings", description: "Fluctuating hormone levels may also result in mood swings or emotional sensitivity." }
             ],
             // can use commas to "Trailing commas in object literals are legal as well" “Trailing Commas - JavaScript | MDN.” Developer.mozilla.org, 12 Sept. 2023, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas. Accessed 22 Feb. 2024. // 
             strategies: [
                 { title: "Prioritize Self-Care", description: "Take time to rest and rejuvenate. Listen to the body's cues and avoid overexertion." },
                 { title: "Adjust Work Tasks", description: "Cut back on demanding work tasks or work at a slower pace." },
                 { title: "Engage in Mindful Activities", description: "Mindfulness practices such as yoga, restorative stretching, or meditation to support physical and emotional well-being." },
                 { title: "Reflect and Evaluate", description: "Use this time to journal about achievements, challenges, and goals. Consider what changes or adjustments need to be made." },
                 { title: "Stay Hydrated and Nourished", description: "Drink plenty of water and maintain a balanced diet to support the body's needs." },
                 { title: "Be Kind", description: "Be compassionate toward yourself and acknowledge that it's okay to take things slower during this phase. Cut yourself some slack! This can be a difficult experience on your mind and body." }
             ],
             image: "images/Menstrual.svg"
             // within a object you can reference photos like this // 
             // “Javascript - Adding Images to Objects via Object Literal Notation.” Stack Overflow, stackoverflow.com/questions/38003222/javascript-adding-images-to-objects-via-object-literal-notation. Accessed 22 Feb. 2024. // 
             // “Assign Function Return Value to Some Variable Using Javascript.” Stack Overflow, stackoverflow.com/questions/3941381/assign-function-return-value-to-some-variable-using-javascript. Accessed 22 Feb. 2024. // 
         };
         phase = "menstrual-phase";
         // I said let=phase before which meant I was going to assign a value later, this is me assigning that value // 
 
     } else if (daysDifference < 12) {
         result = {
             phase: "You are in your Luteal Phase!",
             overview: "The Luteal Phase occurs after ovulation and typically lasts from Day 15 to Day 28 of your menstrual cycle. Progesterone levels rise, preparing the body for potential pregnancy. This phase is associated with increased relaxation, but it may also bring about premenstrual symptoms such as bloating, mood swings, and breast tenderness.",
             strengths: [
                 { title: "Enhanced Relaxation", description: "Progesterone promotes feelings of calm and relaxation during this phase, making it an ideal time for self-care and stress reduction activities." },
                 { title: "Deepened Introspection", description: "The introspective nature of the Luteal Phase allows for deep reflection and emotional processing, offering insights into personal growth and development." }
             ],
             challenges: [
                 { title: "Premenstrual Symptoms", description: "Many women experience premenstrual symptoms such as bloating, mood swings, irritability, or fatigue during the Luteal Phase." },
                 { title: "Emotional Sensitivity", description: "Fluctuating hormone levels may lead to increased emotional sensitivity or vulnerability during this phase." }
             ],
             strategies: [
                 { title: "Self-Care Rituals", description: "Engage in activities that promote relaxation and well-being, such as gentle exercise, baths, or spending time in nature." },
                 { title: "Healthy Coping Mechanisms", description: "Practice healthy coping strategies to manage premenstrual symptoms, such as journaling, talking to a supportive friend, or seeking professional support if needed." },
                 { title: "Maintain a Balanced Lifestyle", description: "Eat a balanced diet, prioritize sleep, and manage stress levels to support overall well-being during this phase." },
                 { title: "Communication", description: "Communicate openly with loved ones about your emotional needs and boundaries during this potentially challenging time." },
                 { title: "Practice Gratitude", description: "Cultivate a mindset of gratitude to counteract negative emotions and foster a sense of positivity and resilience." }
             ],
             image: "images/Luteal.svg"
         };
         phase = "luteal-phase";
        
 
     } else if (daysDifference < 18) {
         result = {
             phase: "You are in your Ovulation Phase!",
             overview: "During the ovulation phase there is a surge in focus, communication skills, and outward energy. It's a prime time for important meetings, presentations, negotiations, and intense workouts.",
             strengths: [
                 { title: "Heightened Focus", description: "It is easier to concentrate and tackle complex tasks due to the peak levels of estrogen and testosterone." },
                 { title: "Enhanced Communication Skills", description: "The hormonal peak during the ovulatory phase boosts verbal and social areas of the brain, enhancing communication skills and confidence. This makes it an opportune time for important conversations, negotiations, and collaborations." },
                 { title: "Outward-Focused Energy", description: "The increased energy and confidence make it ideal for networking and problem-solving." },
                 { title: "Increased Confidence", description: "There is a boost in self-assurance, which makes it a great time to take on leadership roles." }
             ],
             challenges: [
                 { title: "Short Duration", description: "The ovulatory phase only lasts a few days, so it is important to make the most of this productive time." },
                 { title: "Potential Overwhelm", description: "Be careful not to take on too much during this phase, as heightened energy may lead to burnout." }
             ],
             strategies: [
                 { title: "Schedule Important Activities", description: "Prioritize important meetings, presentations, and negotiations during this phase when communication skills are at their peak." },
                 { title: "Practice Self-Advocacy", description: "Take advantage of increased confidence to advocate for and pursue opportunities." },
                 { title: "Engage in High-Intensity Exercise", description: "Channel extra energy into intense workouts to support overall well-being." }
             ],
             image: "images/Ovulation.svg"
         };
         phase = "ovulation-phase";
 
 
 
     } else {
         result = {
             phase: "You are in your Follicular Phase!",
             overview: "During the follicular phase there is a surge in energy, focus, and creativity due to rising estrogen levels. This phase is often referred to as the 'Creative Superstar' phase due to the increased access to creative energy. It's the perfect time to tackle challenging tasks, start new projects, and engage in social activities.",
             strengths: [
                 { title: "Heightened Energy", description: "With energy levels on the rise, it is easier to dive into tasks that require intense focus or are detail-oriented." },
                 { title: "Enhanced Creativity", description: "The increase in estrogen unlocks a floodgate of creativity. Perfect time to come up with new and innovative ideas." },
                 { title: "Drive and Motivation", description: "There is a stronger sense of determination and purpose during the follicular phase, making it easier to take on ambitious projects and pursue goals." },
                 { title: "Openness to New Ideas", description: "This phase brings with it a sense of curiosity and openness, encouraging new concepts and approaches." }
             ],
             challenges: [
                 { title: "Hormonal Fluctuations", description: "Despite the boost in energy, hormonal fluctuations can still affect mood and productivity levels." },
                 { title: "Overcommitment", description: "Be mindful of not taking on too much during this phase, as enthusiasm can sometimes lead to overcommitment and potential burnout." },
                 { title: "Distractions", description: "Heightened social energy during this phase may lead to distractions from work-related tasks." }
             ],
             strategies: [
                 { title: "Prioritize Tasks", description: "Focus on tackling challenging tasks that require focus and attention to detail during the follicular phase when energy levels are highest." },
                 { title: "Schedule Creativity Sessions", description: "Set aside dedicated time for brainstorming, idea generation, and creative problem-solving activities to leverage heightened creativity." },
                 { title: "Manage Social Engagements", description: "While social activities can be beneficial during this phase, ensure they are balanced with work commitments to avoid distractions and maintain productivity." },
                 { title: "Set Realistic Goals", description: "Avoid overcommitting to projects and initiatives by setting realistic goals and prioritizing tasks based on energy levels and capacity." }
             ],
             image: "images/Follicular.svg"
         };
         phase = "follicular-phase";
     }
 
     displayResult(result, phase);
     // this is calling the function below// 
 }
     
 
 
function displayResult(result, phase) {
 
         // get the results // 
         let resultContainer = document.getElementById("resultContainer");
         // clear results 
         resultContainer.innerHTML = ""; 
     
         if (result.hasOwnProperty('image')) {
             // “How Do I Check If an Object Has a Specific Property in JavaScript?” Stack Overflow, stackoverflow.com/questions/135448/how-do-i-check-if-an-object-has-a-specific-property-in-javascript. Accessed 22 Feb. 2024. // 
             // basically checking if the result has an image // 
             let logoImg = document.createElement("img");
             // if it does create an object // 
             logoImg.src = result.image; 
             logoImg.alt = "Your text here";
             // “Adding Alt Attribute to Image in Javascript.” Stack Overflow, stackoverflow.com/questions/15471688/adding-alt-attribute-to-image-in-javascript. Accessed 22 Feb. 2024. // 
             resultContainer.appendChild(logoImg);
                     // Append the image element to the result container
                // “AppendChild() - JavaScript DOM Tutorial for Beginners.” Www.youtube.com, www.youtube.com/watch?v=e0ihEHxd6vI. Accessed 22 Feb. 2024. // 
  
         }
     
         // div for the result heading // 
         let resultDiv = document.createElement("div");
         // creating "div" in html.   // 
         //“Document.createElement().” MDN Web Docs, 30 July 2019, developer.mozilla.org/en-US/docs/Web/API/Document/createElement.// 
     // “How Can I Create and Style a Div Using JavaScript?” Stack Overflow, stackoverflow.com/questions/6840326/how-can-i-create-and-style-a-div-using-javascript.//
         resultDiv.classList.add("result-heading");
         //“Element: ClassName Property - Web APIs | MDN.” Developer.mozilla.org, 7 Apr. 2023, developer.mozilla.org/en-US/docs/Web/API/Element/className. Accessed 22 Feb. 2024.// 
         resultDiv.textContent = result.phase;
         // https://www.youtube.com/watch?v=Ry-0bU85dP8“The Element.className Property in Vanilla JavaScript.” Www.youtube.com, www.youtube.com/watch?v=Ry-0bU85dP8. Accessed 22 Feb. 2024. // 
 
         resultContainer.appendChild(resultDiv);
         // appending this to the results // 
         // “TextContent - Javascript DOM Tutorial for Beginners.” Www.youtube.com, www.youtube.com/watch?v=XW9ncbnfzZo. Accessed 22 Feb. 2024.//
     
         if (result.overview) {
             // Adding an overview div if the result has an overview // 
             let overviewDiv = document.createElement("div");
             // creating a div to style these results // 
             //“Document.createElement() - Javascript DOM.” Www.youtube.com, www.youtube.com/watch?v=VW8kNAous88. Accessed 22 Feb. 2024./ 
             overviewDiv.classList.add("overview");
             // allows me to style in the css// 
             // “Class List (ClassList) Property - JavaScript DOM Tutorial for Beginners.” Www.youtube.com, www.youtube.com/watch?v=XYzSyPlY7_E. Accessed 22 Feb. 2024.// 
             //“Element.classList - Web APIs | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/API/Element/classList. // 
             overviewDiv.innerHTML = `<br><br><strong>Overview:</strong> ${result.overview}`;
             //“InnerHTML Property in JavaScript Explained | JS for Beginners Ep. 8.” Www.youtube.com, www.youtube.com/watch?v=DSScGM_OtME. Accessed 22 Feb. 2024. // 
             // actually writing oveview down // 
             resultContainer.appendChild(overviewDiv);
         }
     
     
     
 
    let sectionsRow = document.createElement("div");
    sectionsRow.classList.add("sections-row");

    if (result.strengths) {
        let strengthsDiv = createSection("Strengths", result.strengths);
        // creates a nother section. // 
        sectionsRow.appendChild(strengthsDiv);
        // adds to the result container // 
        // TheCodex. “Java Programming #10 - Defining Methods and Functions.” YouTube, 27 Mar. 2019, www.youtube.com/watch?v=SkVDfaHQwRU. Accessed 21 Nov. 2023.// 
    }


    if (result.challenges) {
        let challengesDiv = createSection("Challenges", result.challenges);
        sectionsRow.appendChild(challengesDiv);
    }

  
    if (result.strategies) {
        let strategiesDiv = createSection("Strategies", result.strategies);
        sectionsRow.appendChild(strategiesDiv);
    }

    if (sectionsRow.children.length > 0) {
        resultContainer.appendChild(sectionsRow);
    }
}
 
 // Basically this is the order in which is supposed to appear in 
 
 
 function createSection(title, items) {
    
     let sectionDiv = document.createElement("div");
       // new div element
     sectionDiv.classList.add(`${title.toLowerCase()}-div`);
     // “Java String: ToLowerCase Method.” W3resource, 19 Aug. 2022, www.w3resource.com/java-tutorial/string/string_tolowercase.php#:~:text=Java%20String%3A%20toLowerCase()%20Method&text=The%20toLowerCase()%20method%20converts. Accessed 22 Feb. 2024.// 
     // the div is added// 
     // this is how I refereneced it in my css// 
 
     let titleDiv = document.createElement("strong");
     // makes sure all the tiles are stong (bold) // 
 
     titleDiv.innerHTML = `<br>${title}:<br>`;
     // adds line breaks // 
     // “Element.innerHTML - Web APIs | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML.// 
     sectionDiv.appendChild(titleDiv);
 
     items.forEach((item, index) => {
         // “JavaScript Array ForEach() Method.” Www.w3schools.com, www.w3schools.com/jsref/jsref_foreach.asp. //
         //Pop, Florin. “ForEach Array Method | JavaScript Tutorial.” YouTube, 2 Apr. 2020, www.youtube.com/watch?v=SXb5LN_opbA. Accessed 15 Oct. 2022. // 
         // “Array.prototype.indexOf() - JavaScript | MDN.” Developer.mozilla.org, developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf. // 
         // loop for each item // 
 
         let itemContainer = document.createElement("div"); 
 
         let itemBtn = document.createElement("button");
         itemBtn.classList.add(`${title.toLowerCase()}-btn`);
         // button in css // 
         itemBtn.textContent = item.title;
         // make the text content the title content// 
         itemContainer.appendChild(itemBtn);
         // Append the button to the item container //
 
         let descriptionDiv = document.createElement("div");
         // another element this is for the descption // 
         descriptionDiv.classList.add(`${title.toLowerCase()}-description`);
         // // Add a CSS class to the description div
         descriptionDiv.textContent = item.description;
         //// Set the description text content to the item description // 
         // “Node: TextContent Property - Web APIs | MDN.” Developer.mozilla.org, 7 Apr. 2023, developer.mozilla.org/en-US/docs/Web/API/Node/textContent. // 
         itemContainer.appendChild(descriptionDiv);
 
     
         descriptionDiv.style.display = "none";
         // hide the descrpion // 
         // “JavaScript Style.display=“None” or JQuery .Hide() Is More Efficient?” Stack Overflow, stackoverflow.com/questions/13688238/javascript-style-display-none-or-jquery-hide-is-more-efficient. Accessed 22 Feb. 2024. // 
 
         // Toggle description display on button click
         itemBtn.addEventListener("click", () => {
             //reference itemBTn and then on click this happens. =// 
             // “JavaScript Button Click Event(AddEventListener) Tutorial #1.” Www.youtube.com, youtube.com/shorts/UcYi-uzFkdQ?si=hyYzxGjaVUZuFgZw. Accessed 22 Feb. 2024. // 
             if (descriptionDiv.style.display === "none") {
                 descriptionDiv.style.display = "block";
                 // this is the show the words // 
             } else {
                 descriptionDiv.style.display = "none";
             }
             // “Difference between Display None and Block ? - CodeProject.” Www.codeproject.com, www.codeproject.com/Questions/745583/Difference-Between-Display-none-and-block#:~:text=display%3Anone%20hides%20an%20element. Accessed 22 Feb. 2024. // 
             // “CSS Styles in JavaScript (Setting and Getting) - Beau Teaches JavaScript.” Www.youtube.com, www.youtube.com/watch?v=z_mSgK-6pOQ. Accessed 22 Feb. 2024. // 
         });
 
         // Append the item container to the section div // 
         sectionDiv.appendChild(itemContainer);
     });
 
     return sectionDiv;
     // “#37 How to Use JS Return | JavaScript Full Tutorial.” Www.youtube.com, www.youtube.com/watch?v=4t8Q_YLpuKw. Accessed 22 Feb. 2024. // 
 }
 