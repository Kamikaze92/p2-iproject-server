1. API SPOTIFY
    <iframe src="https://open.spotify.com/embed/playlist/0tT47hAmA5LwIM9wssuNUG?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
    Playlist id = 0tT47hAmA5LwIM9wssuNUG

2. API QUOTABLE
    source https://github.com/lukePeavey/quotable

    BASE URL https://api.quotable.io/quotes
    example https://api.quotable.io/quotes?tags=success

    query params = ?tags=TAGS    -> TAGS from tags list
    tags list
    - famous-quotes
    - life
    - inspirational
    - future
    - success

sequelize model:generate --name User --attributes name:string,email:string,password:string,
sequelize model:generate --name Post --attributes name:string,email:string,password:string,