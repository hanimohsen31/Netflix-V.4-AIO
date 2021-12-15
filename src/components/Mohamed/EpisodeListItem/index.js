import React from 'react'

function EpisodeListItem() {
    return (
        <div className="row l-item">
          <h2>1</h2>
          <img className="col col-md-3 col-lg-2  ep_img m" src="/images/1.jpeg" alt='' />
          <div className="col m">
            <div className="mb">
              <h2 className="ep-title">Episode Title</h2>
              <span className="ep-time">59m</span>
            </div>
            <p>
              Description of Episode...Description of Episode... Description of
              Episode...Description of Episode... Description of
              Episode...Description of Episode...
            </p>
          </div>
        </div>
    )
}

export default EpisodeListItem
