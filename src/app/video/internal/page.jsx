import { Suspense } from 'react'

export function Video() {
    return (
      <video width="320" height="240" controls preload="none">
        <source src="./video.MOV" type="video/MOV" />
        Your browser does not support the video tag.
      </video>
    )
  }

  export default function Page() {
    return (
      <section>
        <Suspense fallback={<p>Loading video...</p>}>
          <Video />
        </Suspense>
        {/* Other content of the page */}
      </section>
    )
  }