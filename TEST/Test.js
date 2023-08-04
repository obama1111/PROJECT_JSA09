// Get the necessary elements from the DOM
const movieContainer = document.querySelector('.movie-container');
const previousBtn = document.getElementById('previous-btn');
const nextBtn = document.getElementById('next-btn');

// Array of movie objects
const movies = [
  {
    title: "Movie 1",
    poster: "data:image/jpeg;base64,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",
    description: "Description of Movie 1",
  },
  {
    title: "Movie 2",
    poster: "data:image/jpeg;base64,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",
    description: "Description of Movie 2",
  },
  {
    title: "Movie 3",
    poster: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJcAXAMBIgACEQEDEQH/xAAcAAACAQUBAAAAAAAAAAAAAAAEBQYAAQIDBwj/xAA5EAACAQIEBQIDBgYBBQEAAAABAgMEEQAFEiEGEzFBUSJhFHGBByMykdHwFUJSobHBJDNTgqLhFv/EABoBAAMBAQEBAAAAAAAAAAAAAAIDBAEABgX/xAAtEQACAgEDAgUDAwUAAAAAAAABAgARAwQhMRJBIlFhcaETgfCRseEUIzLB0f/aAAwDAQACEQMRAD8A47VCyKd+tjgNifJwfnBC1CxoNKhQbe5wARhr81OPMsSfJw2yy1LQ1Fcfxj7uO/k98KhhmQ0mSQJGCT8QQQPkcT5RYA8zLtAel2yd1Uke/A/S7jWGJoKim5oflrTaeYBcByd74A/gM4LffJpBAU/1DBlIuYaI2epCRKLs8gBv7D9cFvOWPNXdF2Qf1Me/798RBnRqUz0hwaXUYgcqsK3F7GqF99wK228hcXUlL8K9YlQ6okoZQt97b2+uM3LxvRSSqeXPEsMysLb9tsGywVK0/wDxZY1qGJJLLe/sDhHUNX/GU8Vazkl1IB6dfbBL/cN3FZx/R41ToPp5CzdE37iq7mA1cL01S8LE+k2HuO2NNz5OGnEZBzNrdkW/zwqxbiYsgJnm9ZiXDqHxrwCRMgT5xKeGs7hoMvaGWMseYWBv2sMRTBVPvH269zi3SOUyXIsihhRm7PFdc0mWS2r03t7gH/eAsSbMstjmq/jah15LLbbbptc4UV4phvRxMIugkf8Am+Q+nX/GJifERKGQjeBIhc2H5noMMaFw0UlHDKRIQWRjsGbwPpgOKneSMyAenVpXbdj4A74Ojpo6BRLVreX+RPH784FxYh6duhrI27+0YU95aakimBV1XSFY7XA2/sMAuZI3jQtqmch3JOygG9sbaSuEsNqpVXS+pGHXoe3yxlUQQOZitZGnOsQZNjp8DE60hIIn1MhbUIrI1na967evlXPrLZXVk/GLIS9OoMgv1Bv2+eNtXKPjxNNvFRJuf65COmMKaKlpabTLUaw7c26Lsyp2+V8Ka2tkq5LtZU1Eqg6b/wCTgBjD5CRxKcmqbTaREyG25rnuSL9BYPxxNNRI9RM8rm7MbnGo7HGV8WIF8W0ANp5xmLEk8mWJGDaMPyjpBtfGmlo6ircrSwSSkEA6Fva/S/jEyyrIkpaQR1gRp9RLDmKNPtufbDcNdVmCVLcS3Kj03qkDQoQLkA2PkWGxAthPmGT1VRJJUwypUR3sDcqR4Fj+uJNPTtlkkRaVNYfUCW8EE3wPJmVNPKSGRE0iNY13UAfL3J/PGlAxBEaxFEGRD7+hmtMjxzRkqqSA+n3GBp5JJpDJK7OzdWY4nTUvNolWqs5BJAYagb72B/XGqbh/JpgDG0xdmULyDo1gjrZhYdtr/qebHFgniQtmZkDEekbKOwxZ5mdEV99N7HvY9v35w54my0UPJenH/DYaUuNLBu+oXO/1OELCwGFEVzNsiwDNk8xlIvsFUKo8AY1XxdBqYAnrhrkmSSZkxdg/JVtHoG7t4GOVSeJxazZMW08E1VKIqeNpHP8AKov+xiSZfw9FDHHNXssjO1lQE2Hf67YkcVPBlOXww0YELSOTIYwGLHpa/W47D3wZGKRauljlA3STn6hYISLFb9Lja9jscFkAxjfmb0xdNTLTpy4JYmjRyFjhHQf1AeOn1B8Y3a5I1UILjpfVbobePbGT5SUhEnPlBYFdTaiAo32HgWN+v0wvhTM15iwLPIoaxaNj1sOvv0w5YXVvtEOc1xqM3l1uXWM8pWvc2Xa/vikhcRhwot3P+8Y1mXkTw1KXNPOQxOgKY/II+RBFtiCMSKjhCJU0stTE1OicwMrL6iAbAe+/QeR9EnMuMbxiYgbsxVR1rRHlsDouO+4J7jEqyBqeDN0RatWjkjYmNkuVcbBbdySQQf0OI7lGUU9VMI6mtaF72FoBILjsfUNvzwdLl81FnNy4eMEOJlOzd74obq6RcnBUMYJxZTvULHT0wcxhme7C5AG36/liLGlFwApNu5NsTzP6giJKOMgSSDVUOoALk7227D/P0tF68BJ+WI9GkAXt198T5WBahGJj8NtFU1DJG4MYJHUDzjpfA8Moyan+FiRpeUzBnsAL6rn5i+Irl4H3aybg+cS2KepoiklLNHDIt2jJPW9yRptuNyPrj6GLAAOtYjc5AtTDK4KpJI6lrfDVEulWXswboR9DjCpaBqtKebWv/eUMdRls2w9iwH54ccNZZm3EbPJ8QsMNDuusEKrNc226k387becJs/4br8sleoqMwM6E80kE21ahfe1xa5O5sLYl1gJy8SpSbJO0LqIszTmxxPaniL+trAKrG35mx2G4semFtJUinR0VomGsm5xsqeauUSfxGrmidodVILahOVaxDW6Eg7Hbv5wprxRxNClDWCX7lTM7em8h3IAPYXA+mFI7qOloQx4ym43jTNspgo/4bkcdR8RUw05YudlbWxIUdwPHXY4Qx0kkUya1cU5KtZlPnpfxg3IUqFd5aqRnmltoRjc6QLD99hg2uly6IxVdXIOazsrAEblQux7DqPzwRUBd4rE7NkofxI8GkSaNkLx6yxKBbk27r5v/AGw5kq5YRRc2EGeWMaY3NwASbXsd/wAQ/viLcx4peU2xjaS5XtcWOJFWTLVPQMAE5Eekqo6C91HyANvphZ6wnN+X57RzMjNQWrNn89/zyPp6Zcxr6qqla0MepgbnoOlrd8RWuZZaiQiapk9R/wCpct9b9cSA1klFl7SpJGsJYKyiRdV9v5ev8w/YOFtfKs6tO1mk1+og38YmQm4xungQSNzTaF5RQW1XYbn3xJ56hp8tppomJ0jS632vsASO/cfXEYlLTPBzKqBnmIVRzB6N9g3ZcH0lUtFlzmouUL2spv8Alj6+ly+Ir2kOZeGHInU+EKmKLhKGnhPw01ZJJISQTrKWBW46Xta/+8DcSQRwQGG4kSdZAacobJZfTc9yTvt7fPCXK55Fo8hegnDKI5W9QsG1tci3zFsbMwmranO0aoYelLRquwW/z7m2NItib5laoWoniJM2ePMqKgminhhMUOh0c22Hp2A6/h74jxoI2Ylqlr37RA3/APYYkUfDdXmNRVPEjCKFvw2sd9wbdAOv5HCypyutp3VRT1EiMoZHjjLgg+67Ym6aMYwLLfaEMWmjaFJJEVh6uXscDZlw7InD9NOZJFhFTMwd0uLMsW5PYek4ZS1n8NrnpzlzStCFcrrszAqG8EA+oeemO5z8H5LVcPNklRTM9CziTSZW1Br3BDXvf/WI1GVTZO0ZqdVpmUBUsj7ftPMCURBMmsSA+rWAeh3xnm06wiJFY3Av+gxKqohKmpCwIy0EMQK72VERRqax9vPfHP6+oEtRM6oFDMSB/SMPGo6kKgVJMuEY1V7st8fP7yZxcOJmmX1+YiuMK0yhuToBMl/B7YTCijgjZRJI2rqSenywwyzNlXKWgjcHmoAwB6G2AZnsuEBjUYQt2IFJTLE45csn/kQf9Y25m/8AxIYbkqXv/b/7jXOfJwNV1CSrEinUVvexxRjepPlAqTD7N83i1NlWYS6od2p0I6N3F+3kAdycSPiDM4qGrhWlCM0jHmFrllBGxv16+ccopH5NWjX2DA7bbY6EaQpTUzxWlnlBZmvffwNsPVyqWe0Zp7fwQ2DOK7LqiarpTaOROXMttSsvvt+74Ek4t4hiWKLKKt4KaNAoWFAwJ83IO+GNLllTFQzuJIGIPqCyg2Nr269bAm3jC+TLJb3uqA9ASB02238g4JPpuvUYOZwjFCL9Z0rKuAWoqiTMK7MefVmJkOhLKRoQfMboTbfr87z4dBgYtqRgLFrGw98boy5J1bYhI3kQazItU5LQ5lk1YIMto6monytFTWq/eNpcKNXbe2+PKO9zff549oZbAtJSwwKmkxxqtutgO18eWuPeCM34UrWkrYtdHM/3NUn4WJ30nw3Xb2wI4jVNyMR2G5AO9sYu7qSBI3tYnFkJAI3xZgNR3uBjoctqZvxMT9cXUgEeMUBdiOhxa5Gw742ZGWU2bM6MclZWNTH901rP6gNPyPTHqU8K5RLXTTGnK2cqqLYIo0joLe5PzOOS/YpwPPV19LxLmIj+CiLGCKRLmV7EA27BeoP6Xx3ONGDzltgZLj39K4M7wPqFP8TIhmWVUsQy+tkiYJUOFqEJN7AAKFGwA2uRte59sV/BaervPR5jFTI5OqMw6vVfcjwD1t+uJHn1O82UPDDIYpPSsT36MTYX/PBkcEUSKjCMkDc6AL4FfDQB4gtlLbzFWKuw6Y2xzMxttscYSx6TfqT4xWlYzdCRfDDRg1W0Gkzqhir1o5qqFKkglYmcBmHcgd8AcbcO03GnDcuWPPyXLLJDKBfQ49vkSPrjg/2s1hfjWtMYvHArQmx/mZSh/wAE4Ii4uzumkr6qHOpoJCJY4Kf8SBY7WIB2B2J3643pUygYCDtG7/YPmoiqXTN6Quu9PGEY6x4Ym1j+f0xAM/4M4h4ehE+cZXPBCWK8zZlBBtuwuBft5xN5/tG4hetNdHWctzT04hhA+7Jcg+r6hu17MdwbHEjyT7RZc9qJMn4jyujnin51o2GpdaDWIyGFiLbgn2HXC+jyhHG68zhlHTzVdTHBSRPNUSGyRRrdmPgDHoPgX7Kcpyakim4lpqWtzR9epHPMiVTawCsLEjzbvjneX8WUmQ5lM2S5HluWV5LRioJeSwb8LKHJCjexA7H2wHnfF+b57VK9ZWymQNqjiTVGsUoO8dxbY9t79POOoDkzfosTU9Dw5tk0VWuWUlTSCVI9aU8JAsg2uANrX8YY87XGGi9V+mPKSzVMTxZplkz0Y5pa4bVyZb9TsLX6H573GPQP2ZZzXZ5w+KqvpDFMHMbNqBRyuxK23t8/74PaIzadk37STV+p6QDSdQkQ2+Tg43FgTdhvjI6hfYYwKM34rfTAxIEss/MuLW974wSS5I72vio42UdSPIvio0Go4KHOScRfZhmOYZrLOojnjrK4ySSRy2aNNXpJ1dbBm2HgYhdXwtmq1tZHLSVUcUBmllBp2ITUuliG6W3vj0VWUK1VPJDzHjLiwZSdjhJ/+WqhTtEuafi1WZkYkX99Xn8x4w4Piq2H6bSldQ/BM8/02V1s8MlUFTlUUEURdQWUMGujNtsDa2C6anzFahM8p6dY3OYxfDx830l0AupbpYhu/brjtacLGjpooZszpNCook1wkCXSLXIL+5+uk9sYQcIiOoYHMKU3ICw8j8BuWOkatiQb/S/TGE6fyPx/yH9c12+ZyXjzho0vE09OseiN4i+nqRGfUpFuuk3B+Rxqy3gzOszp5jHRzyF4Y2b7soshvs6u1hqAtf6nHXo+HniZXOZ0EgHqVgtrC7vsSx20t/brgik4XrVpoklzCOQoqDWUbUbAC99R3Nr3/wB740tg56bPv/oTjqG8wPtIbkn2T1KZrBPmcirGXDO0IDMwsTYk9CdIvYWOr8up5VlNHk1N8Nl1OlPDe+le58kncn9MK6ThlopkklrCyhSCqArq3Nid+tjv5w3SFIAFUGwHc9fn5wORwwoH7VUkyOzHxGFltQ64yUDfGpY/5icbYyLH1d8IgiARvWCJmaNHa40KGttbvi8D1GtuZAFUDaz3JPjFYrBTZthaV2s8Wkebg42ljpuQLWxbFY6bE+b089TPE0UaehDpbVaxPXqD2/zgYUFS2aJU6UUq7DXrB9FrW06bf3/TFYrGETZnHllWjuYwhkJALcwDV6bFraCL3IPv1w4iRqeihjeysoCEA3G23X6YrFYzvMPEIjcCK9unjGmQ+q+m217nFsVjYJg/xdRp/CqvqsATcWvjenxJF5Fhv8zisVjTMU3P/9k=",
    description: "Description of Movie 3",
  },
  {
    title: "Movie 4",
    poster: "data:image/jpeg;base64,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",
    description: "Description of Movie 4",
  },
  // Add more movie objects here
];

let currentIndex = 0;

// Function to display the current movie
function displayMovie() {
  const currentMovie = movies[currentIndex];
  const previousIndex = (currentIndex - 1 + movies.length) % movies.length;
  const previousMovie = movies[previousIndex];
  const nextIndex = (currentIndex + 1) % movies.length;
  const nextMovie = movies[nextIndex];

  movieContainer.innerHTML = `
    <div class="previous-movie">
      <img src="${previousMovie.poster}" alt="${previousMovie.title}">
      <h3>${previousMovie.title}</h3>
    </div>
    <div class="current-movie">
      <img src="${currentMovie.poster}" alt="${currentMovie.title}">
      <h3>${currentMovie.title}</h3>
    </div>
    <div class="next-movie">
      <img src="${nextMovie.poster}" alt="${nextMovie.title}">
      <h3>${nextMovie.title}</h3>
    </div>
  `;
}

// Function to handle the next button click
function handleNextClick() {
    currentIndex = (currentIndex + 1) % movies.length;
    displayMovie();
  }
  
  // Function to handle the previous button click
  function handlePreviousClick() {
    currentIndex = (currentIndex - 1 + movies.length) % movies.length;
    displayMovie();
  }
  
  // Add event listeners to the buttons
  nextBtn.addEventListener('click', handleNextClick);
  previousBtn.addEventListener('click', handlePreviousClick);
  
  // Display the initial movie
  displayMovie();


