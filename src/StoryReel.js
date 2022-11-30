import React from 'react'
import './CSS/StoryReel.css'
import Story from './Story'
function StoryReel() {
  return (
    <div className='storyReel'>
        <Story
                profileSrc="https://mir-s3-cdn-cf.behance.net/projects/404/c9ff23113102707.Y3JvcCwxODU1LDE0NTEsMzU4LDEwNQ.png"
                image="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3Rvcnl8ZW58MHx8MHx8&w=1000&q=80"
                title="Penguin Random House"
            >

            </Story>
            <Story
                profileSrc="https://i.pinimg.com/736x/2a/57/e5/2a57e514fbc2ac557deef09ad62fee9a.jpg"
                image="https://fashiontravelrepeat.com/wp-content/uploads/2020/09/Sunset-Instagram-story-idea-1.jpg"
                title="Travel Blog"
            >

            </Story>
            <Story
                profileSrc="https://w7.pngwing.com/pngs/80/950/png-transparent-computer-icons-foodie-blog-categories-miscellaneous-food-logo.png"
                image="https://i.pinimg.com/originals/07/ef/a2/07efa2afbf217ad82e95a4b5c1f0f093.jpg"
                title="Food Blog"
            >

            </Story>
            <Story
                profileSrc="https://imageio.forbes.com/specials-images/dam/imageserve/1084793354/960x0.jpg?format=jpg&width=960"
                image="https://lh4.googleusercontent.com/7J-ehHqA59uogI-4HYoUV7m5MXwCc7HB2kQ6lwp8IHjKhOteI2eKVWabsaLOMl7sJmuTyMkey_FZne-L0muDTvPN1G9OJNWxOvHnLZN8_8cBw8A37BoSu3sLcpotiSnnUJadOjsK"
                title="Sarah K "
            />
    </div>
  )
}

export default StoryReel