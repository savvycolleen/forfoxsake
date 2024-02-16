
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const url = `https://randomfox.ca/floof/`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector("img").src = data.image
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

