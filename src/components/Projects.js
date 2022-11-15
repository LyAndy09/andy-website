import React from "react";

function Projects() {
    return(
        <div className="projects--wrapper">
            <h3 className="projects--title">Projects</h3>
            <h4><a className="a--yelp" href="https://github.com/LyAndy09/Yelp-Comment-Search" target="_blank">Yelp Comment Search</a></h4>
            <p className="projects--yelp">
                Whenever I would crave something specific like a rose latte, my first instinct would be to try and Yelp it. However Yelp's search returns a general category based on what you're looking for (in my case it shows coffee shops nearby).
                I only had two options to see if a rose latte was able to be ordered, look at photos of their menu or find someone leaving a review about it.
                This program returns a list of businesses matching the user's input.
            </p>
            <h5><a className="a--todo" href="https://github.com/LyAndy09/basic-to-do" target="_blank">To-Do List</a></h5>
            <p className="projects--todo">
                A CRUD program that creates a list based on a user's input. Able to create, edit and delete tasks and is saved locally to the browser. Keeping myself organized and practicing JavaScript and React.
            </p>
            
      </div>
    )
}

export default Projects;