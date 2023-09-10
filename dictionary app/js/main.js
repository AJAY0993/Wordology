const audio = document.querySelector('audio')
const search = document.querySelector('.search')
const output = document.querySelector('.output')
search.addEventListener('click', () => {
    const inputWord = document.querySelector('.input-word').value
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputWord}`)
        .then(res => res.json())
        .then(data => {

            console.log(data)
            audio.src = `https:${data[0].phonetics[0].audio}`
            output.innerHTML = `<h1 class="word">${data[0].word}</h1>
            <p>
				<span class="part-of-speech">
					${data[0].meanings[0].partOfSpeech}
				</span>
				<span class="
	phonetics
	">
				/	${data[0].phonetics[0].text}   /

				</span>
			</p>
<p class="meaning">${data[0].meanings[0].definitions[0].definition}</p>
<p class="example">${data[0].meanings[0].definitions[0].example}
</p>
<button class="play-sound" onclick="playSound()"><i class="fa-solid fa-volume-high"></i></button>

</div>`

        })
        .catch(() => output.innerHTML = `<h1>could not find the word</h1>`)

}
)


function playSound() {
    audio.play()
}
