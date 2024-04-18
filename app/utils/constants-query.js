import { gql } from "@apollo/client";

export const INNOVATION_QUERY = gql`
  query INNOVATION_QUERY {
    pageBy(uri: "/home") {
      home {
        banner {
          bannerHeader
          bannerText
          bannerButton {
            url
            title
          }
          bannerImage {
            node {
              uri
              link
            }
          }
        }
      }
    }
  }
`;

export const INNOVATION_SLIDER_QUERY = gql`
  query INNOVATION_SLIDER_QUERY {
    pageBy(uri: "/home") {
      home {
        innovationSlider {
          sliderHeader
          sliderSubtitle
        }
      }
    }
  }
`;

export const JOIN_US_QUERY = gql`
  query JOIN_US_QUERY {
    pageBy(uri: "/home") {
      home {
        joinUs {
          joinTitle
          joinMaintitle
          joinDescription
          joinFormtitle
          joinusButton {
            url
            title
          }
          joinFormdescription
        }
      }
    }
  }
`;

export const ABOUT_SOLVE_ONLINE_QUERY = gql`
  query ABOUT_SOLVE_ONLINE_QUERY {
    pageBy(uri: "/home") {
      home {
        about {
          aboutHeader
          aboutTitle
          aboutDescription
          aboutButton {
            title
            url
          }
          aboutImage {
            node {
              link
              uri
            }
          }
        }
      }
    }
  }
`;

export const SERVICES_PROVIDED_QUERY = gql`
  query SERVICES_PROVIDED_QUERY {
    pageBy(uri: "/home") {
      home {
        servicesProvided {
          servicesProvidedHeader
          services {
            servicesProvidedImage {
              node {
                link
                uri
              }
            }
            servicesProvidedDescription
          }
        }
      }
    }
  }
`;

export const IMPACT_QUERY = gql`
  query IMPACT_QUERY {
    pageBy(uri: "/home") {
      home {
        impact {
          impactHeader
          impactButton {
            url
            title
          }
          clientsInfo {
            clientNumber
            clientDescription
            clientImage1 {
              node {
                link
                uri
              }
            }
            clientImage2 {
              node {
                link
                uri
              }
            }
            clientImage3 {
              node {
                link
                uri
              }
            }
          }
          image {
            node {
              link
              uri
            }
          }
        }
      }
    }
  }
`;

export const CASE_STUDY_QUERY = gql`
  query CASE_STUDY_QUERY {
    pageBy(uri: "/home") {
      home {
        caseStudySlider {
          caseStudyHeader
          caseStudyTitle
          caseStudyDescription
          caseStudyButton {
            url
            title
          }
          caseStudyImage {
            node {
              link
              uri
            }
          }
        }
      }
    }
  }
`;

export const IMPACT_OPTIONS_QUERY = gql`
  query IMPACT_OPTIONS_QUERY {
    pageBy(uri: "/home") {
      home {
        impactOption {
          impactOptionHeader
          options {
            header
            description
            subtitle
            subtitleDescription
            benifits {
              list1
            }
            button {
              url
              title
            }
          }
        }
      }
    }
  }
`;

export const OUR_TEAM_QUERY = gql`
  query OUR_TEAM_QUERY {
    pageBy(uri: "/home") {
      home {
        ourTeam {
          ourTeamHeader
          ourTeamDescription
          ourTeamImage {
            node {
              link
              uri
            }
          }
          ourTeamAvatar {
            images {
              node {
                link
                uri
              }
            }
            designation
            name
          }
        }
      }
    }
  }
`;

export const CONTACT_INFO_QUERY = gql`
  query CONTACT_INFO_QUERY {
    pageBy(uri: "/home") {
      home {
        contact {
          contactHeader
          contactEmail
          contactImage {
            node {
              link
              uri
            }
          }
          telegramLink {
            url
          }
          linkedinLink {
            url
          }
          whatsappLink {
            url
          }
          facebookLink {
            url
          }
        }
      }
    }
  }
`;

export const HOME_QUERY = gql`
  query HOME_QUERY {
    pageBy(uri: "/home") {
      home {
        blog {
          title
        }
      }
    }
  }
`;

export const BLOGS_QUERY = (limit = 3) => gql`
  query BLOGS_QUERY {
    posts(first: ${limit}) {
      nodes {
        blog {
          shortDescription
          blogButton {
            url
            title
          }
        }
        featuredImage {
          node {
            link
            uri
          }
        }
      title
    }
    }
  }
`;

export const NAVBAR_QUERY = gql`
  query NAVBAR_QUERY {
    menus(where: { slug: "primary" }, first: 1) {
      nodes {
        id
        menuItems {
          nodes {
            label
            path
          }
        }
      }
    }
    themeOptionBy(slug: "/header") {
      id
      header {
        logos {
          headerDarkLogo {
            node {
              link
            }
          }
          headerLightLogo {
            node {
              link
            }
          }
        }
        authButtons {
          headerLoginButton {
            title
            target
            url
          }
          headerSignupButton {
            url
            title
            target
          }
        }
        megaMenuMain {
          path
          menu {
            fieldGroupName
            sidebarDetails {
              title
              icon {
                node {
                  link
                }
              }
            }
            sidebarContent {
              description
              redirectLink
              title
              icon {
                node {
                  link
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const FOOTER_QUERY = gql`
  query FOOTER_QUERY {
    themeOptionBy(slug: "/footer") {
      footer {
        copyRight
        logo {
          node {
            link
            uri
          }
        }
        pages {
          page {
            url
            title
          }
        }
      }
    }
  }
`;
