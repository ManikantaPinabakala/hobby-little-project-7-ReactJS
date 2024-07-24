import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #eef4f7;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 50px;
  overflow: auto;
`

export const AppHeading = styled.h1`
  color: #334155;
  text-align-center;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
  text-underline-offset: 10px;
  margin-top: 0;
`

export const PackageList = styled.ul`
  list-style: none;
  padding-left: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`

export const PackageListItem = styled.li`
  width: 47%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 599px) {
    width: 100%;
  }
`

export const PackageImage = styled.img`
  width: 100%;
`

export const PackageDetailsContainer = styled.div`
  padding: 20px;
`

export const PackageHeadline = styled.h1`
  color: #475569;
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`

export const PackageDescription = styled.p`
  color: #64748b;
`
