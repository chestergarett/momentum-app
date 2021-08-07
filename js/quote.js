//define quote elements
var quoteClose = document.getElementById('quoteModalClose')
var quoteModalIcon = document.getElementById('add-quote-display')
var quoteModalDiv = document.querySelector('.quote-modal')
var homepage = Array.from(document.querySelectorAll('.homepage'))
var quoteInput = document.getElementById('quoteInput')
var authorInput = document.getElementById('authorInput')
var quoteAddBtn = document.getElementById('quote-addBtn')
var quoteElement = document.querySelector('.quote')
var authorElement = document.querySelector('.author')

//to close quote modal
quoteClose.addEventListener('click', function(){
    quoteModalDiv.style.display = 'none';
})

//to display quote modal
quoteModalIcon.addEventListener('click', function(){
    quoteModalDiv.style.display = 'flex';
    addToDoModal.style.display='none';
    document.getElementsByTagName('body')[0].style.marginLeft = '0';
})
//to add quote in quote generator slide
function addQuote(){
    if(quoteInput.value!=='' && authorInput.value!==''){
        quotes.push({quote:quoteInput.value,author:authorInput.value})
        quoteModalDiv.style.display = 'none';
        quoteElement.innerHTML = quoteInput.value;
        authorElement.innerHTML = authorInput.value;
    }
    else{
        alert('Please fill up both fields.')
    }
}

quoteAddBtn.addEventListener('click',addQuote)

//random quote generator in slide
var quotes = [
    {quote:'You either die a hero, or you live long enough to see yourself become the villain.',
    author:'The Joker'
    },
    {quote:'Ikigai can be defined as ‘a sense of being alive now, an individual’s consciousness as a motive to live.',
    author:'Aikihiro Hasegawa'
    },
    {quote: 'I am always doing that which I cannot do, in order that I may learn how to do it.',
    author: 'Pablo Picasso'
    },
    {quote: 'Taking a leap of faith is better than taking a leap of doubt.',
    author: 'Matshona Dhliwayo'
    },
    {quote: "Life is what happens when you're busy making other plans.",
    author: 'John Lennon'
    },
    {quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: 'Nelson Mandela'
    },
    {quote: "The way to get started is to quit talking and begin doing.",
    author: 'Walt Disney'
    },
    {quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    author: 'Steve Jobs'
    },
    {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: 'Ralph Waldo Emerson'
    }
]


function displayQuote(){
    let index=Math.floor(Math.random()*quotes.length)
    let quote = quotes[index].quote
    let author = quotes[index].author
    quoteElement.innerHTML = quote;
    authorElement.innerHTML = author;
}

setInterval(displayQuote, 10000)

//to change quote also with a click of a button
quoteHomeDiv = document.querySelector('.random-quote-section')
quoteHomeDiv.addEventListener('click', displayQuote)


