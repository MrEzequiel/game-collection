import { FC } from 'react'
import { MdNorthEast } from 'react-icons/md'
import { MetacriticScore, MetacriticItemWrapper } from './styles'

interface IProps {
  metascore: number
  platform?: {
    name: string
    platform: number
    slug: string
  }
  url: string
}

const MetacriticItem: FC<IProps> = ({ metascore, platform, url }) => {
  const getBackgroundColor = (score: number) => {
    if (score >= 75 && score <= 100) {
      return '#6c3'
    }

    if (score >= 50 && score <= 74) {
      return '#fc3'
    }

    if (score >= 0 && score <= 49) {
      return '#f00'
    }

    return '#181818'
  }

  const getColor = (score: number) => {
    if (score >= 50 && score <= 74) {
      return '#000'
    }

    return '#fff'
  }

  return (
    <MetacriticItemWrapper>
      <MetacriticScore
        color={getBackgroundColor(metascore)}
        fontColor={getColor(metascore)}
      >
        {metascore}
      </MetacriticScore>

      <div className="platform-name">
        <p>
          {!!platform?.name ? (
            <>
              Metascore on <strong>{platform.name}</strong>
            </>
          ) : (
            <strong>Metascore</strong>
          )}
        </p>
        {!!url && (
          <a href={url} target="_blank" rel="noreferrer">
            Link
            <MdNorthEast />
          </a>
        )}
      </div>
    </MetacriticItemWrapper>
  )
}

export default MetacriticItem
