
window.onload = fetchData; //might need to add this back to other js files



function countAnimation (len, counterElement, color) {
    const targetCount = len;
    const animationDuration = 2500; 
    const frameDuration = 1000 / 60; 
  
    const totalFrames = Math.round(animationDuration / frameDuration);
    const countIncrement = targetCount / totalFrames;
  
    let currentCount = 0;
    let frame = 0;
  
    const updateCount = () => {
    currentCount += countIncrement;
    counterElement.textContent = Math.round(currentCount);
  
  
    if (frame === totalFrames / 2) {
    counterElement.style.color = color; 
    }
  
    frame++;
  
    if (frame <= totalFrames) {
    requestAnimationFrame(updateCount);
    }
    };
  
    updateCount();
    }  


    



const cachedData_GithubCounter = localStorage.getItem('cache_GithubCounter');
const cachedData_CommitCounter = localStorage.getItem('cache_CommitCounter');

        
const apiUrlCommit = "https://api.github.com/search/commits?q=author:mortenl-dev+committer-date:>2023-01-01";
const apiUrl = "https://api.github.com/users/mortenl-dev";
//VARIABLES IN GITHUBAPI.JS
async function fetchData() {
  try {
    const commits = await fetch(apiUrlCommit);
    const commitdata = await commits.json();
    const commitCount = commitdata.total_count;
    
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    localStorage.setItem('cache_GithubCounter', JSON.stringify(data.public_repos));
    localStorage.setItem('cache_CommitCounter', JSON.stringify(commitCount));
    // Display the repository count
    const repoFunc = document.getElementById("GithubCounter");
    countAnimation(data.public_repos, repoFunc, "#ff6347");
    const commitFunc = document.getElementById("CommitCounter");
    countAnimation(commitCount, commitFunc, "#32ffdd");
                   

  } catch (error) {
      if (cachedData_CommitCounter) {
        const commitFunc = document.getElementById("CommitCounter");
        countAnimation(cachedData_CommitCounter, commitFunc, "#32ffdd");
      }
      if (cachedData_GithubCounter) {
        const repoFunc = document.getElementById("GithubCounter");
        countAnimation(cachedData_GithubCounter, repoFunc, "#ff6347");
      }
      console.error("Error fetching data from GitHub API:", error);
      document.getElementById("GithubCounter").textContent = "Error fetching data.";
      document.getElementById("CommitCounter").textContent = "Error fetching data.";

  }
}
