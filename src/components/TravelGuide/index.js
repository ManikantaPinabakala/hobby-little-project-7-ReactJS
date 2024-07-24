import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {
  AppContainer,
  AppHeading,
  PackageList,
  PackageListItem,
  PackageImage,
  PackageDetailsContainer,
  PackageHeadline,
  PackageDescription,
} from './styledComponents'

class TravelGuide extends Component {
  state = {
    travelData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')

    if (response.ok) {
      const {packages} = await response.json()
      const updatedData = packages.map(eachPackage => ({
        name: eachPackage.name,
        description: eachPackage.description,
        id: eachPackage.id,
        imageUrl: eachPackage.image_url,
      }))

      this.setState({travelData: updatedData, isLoading: false})
    }
  }

  render() {
    const {travelData, isLoading} = this.state

    return (
      <AppContainer>
        <AppHeading>Travel Guide</AppHeading>
        {isLoading ? (
          <div
            data-testid="loader"
            style={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <PackageList>
            {travelData.map(eachPackage => (
              <PackageListItem key={eachPackage.id}>
                <PackageImage
                  src={eachPackage.imageUrl}
                  alt={eachPackage.name}
                />
                <PackageDetailsContainer>
                  <PackageHeadline>{eachPackage.name}</PackageHeadline>
                  <PackageDescription>
                    {eachPackage.description}
                  </PackageDescription>
                </PackageDetailsContainer>
              </PackageListItem>
            ))}
          </PackageList>
        )}
      </AppContainer>
    )
  }
}

export default TravelGuide
