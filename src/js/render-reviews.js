 export const renderReviews = reviews => {
   return reviews
     .map(
       ({ _id, avatar_url, author, review }) => 
                 

`<li class="reviews-list-item swiper-slide id="${_id}">
                <div class="reviews-container">
                    <p class="list-text">${review.trim()}</p>
                    <div class="user-info">
                        <img class="avatar" src="${avatar_url}" alt="${author}" width="40px" height="40px">
                        <p class="reviews-username">${author}</p>
                    </div>

                </div>
            </li>`
     )
     .join('');
 };