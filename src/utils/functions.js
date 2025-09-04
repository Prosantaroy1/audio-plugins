import { produce } from "immer";

export const updateData = (attr, value, ...props) => {
  if (props.length === 0) {
    return value;
  }
  const [currentProp, ...remainingProps] = props;
  if (remainingProps.length === 0) {
    return produce(attr, draft => {
      draft[currentProp] = value;
    });
  }
  return produce(attr, draft => {
    if (!Object.prototype.hasOwnProperty.call(draft, currentProp)) {
      draft[currentProp] = {};
    }
    draft[currentProp] = updateData(draft[currentProp], value, ...remainingProps);
  });
};


export const themeSwitch = (theme, attributes) => {

  return produce(attributes, (draft) => {
    draft['theme'] = theme;

    switch (theme) {
      case 'themeOne':
        draft['Styles'] = {
          "audioContainerDiv": {
            "bg": {
              "color": "linear-gradient(to right, #1e3a8a, #2563eb"
            }
          },
          "headingtitle": {
            "margin": {
              "top": "0px",
              "left": "0px",
              "bottom": "5px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 20,
                "tablet": 16,
                "mobile": 12
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "actorNames": {
            "margin": {
              "top": "3px",
              "left": "0px",
              "bottom": "0px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "audioTime": {
            "color": "white",
            "typo": {
              "fontWeight": 600,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            }
          },
          "progressStyle": {
            "Bar": {
              "color": "#1e3a8a"
            },
            "Fill": {
              "color": "white"
            }
          },
          "controlBtn": {
            "color": "#e1dad5",
            "width": "26px",
            "height": "26px"
          },
          "playerStyle": {
            "playerTitle": {
              "color": "black",
              "margin": {
                "top": "0px",
                "left": "0px",
                "bottom": "0px",
                "right": "0px"
              },
              "typo": {
                "fontWeight": 500,
                "fontSize": {
                  "desktop": 20,
                  "tablet": 16,
                  "mobile": 12
                },
                "lineHeight": 1,
                "fontFamily": "Montserrat, sans-serif"
              }
            },
            "ratingIcon": {
              "width": "26px",
              "height": "26px"
            }
          }
        }
        break;
      case 'themeTwo':
        draft['Styles'] = {
          "audioContainerDiv": {
            "bg": {
              "color": "linear-gradient(to right, #1e3a8a, #2563eb"
            }
          },
          "headingtitle": {
            "margin": {
              "top": "0px",
              "left": "0px",
              "bottom": "5px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 20,
                "tablet": 16,
                "mobile": 12
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "actorNames": {
            "margin": {
              "top": "3px",
              "left": "0px",
              "bottom": "0px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "audioTime": {
            "color": "white",
            "typo": {
              "fontWeight": 600,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            }
          },
          "progressStyle": {
            "Bar": {
              "color": "#1e3a8a"
            },
            "Fill": {
              "color": "white"
            }
          },
          "controlBtn": {
            "color": "#e1dad5",
            "width": "26px",
            "height": "26px"
          },
          "playerStyle": {
            "playerTitle": {
              "color": "black",
              "margin": {
                "top": "0px",
                "left": "0px",
                "bottom": "0px",
                "right": "0px"
              },
              "typo": {
                "fontWeight": 500,
                "fontSize": {
                  "desktop": 20,
                  "tablet": 16,
                  "mobile": 12
                },
                "lineHeight": 1,
                "fontFamily": "Montserrat, sans-serif"
              }
            },
            "ratingIcon": {
              "width": "26px",
              "height": "26px"
            }
          }
        }
        break;
      case 'themeThree':
        draft['Styles'] = {
          "audioContainerDiv": {
            "bg": {
              "color": "linear-gradient(to right, #1e3a8a, #2563eb"
            }
          },
          "headingtitle": {
            "margin": {
              "top": "0px",
              "left": "0px",
              "bottom": "5px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 20,
                "tablet": 16,
                "mobile": 12
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "actorNames": {
            "margin": {
              "top": "3px",
              "left": "0px",
              "bottom": "0px",
              "right": "0px"
            },
            "typo": {
              "fontWeight": 700,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            },
            "colors": "white"
          },
          "audioTime": {
            "color": "white",
            "typo": {
              "fontWeight": 600,
              "fontSize": {
                "desktop": 14,
                "tablet": 12,
                "mobile": 10
              },
              "lineHeight": 1,
              "fontFamily": "Montserrat, sans-serif"
            }
          },
          "progressStyle": {
            "Bar": {
              "color": "#1e3a8a"
            },
            "Fill": {
              "color": "white"
            }
          },
          "controlBtn": {
            "color": "#e1dad5",
            "width": "26px",
            "height": "26px"
          },
          "playerStyle": {
            "playerTitle": {
              "color": "black",
              "margin": {
                "top": "0px",
                "left": "0px",
                "bottom": "0px",
                "right": "0px"
              },
              "typo": {
                "fontWeight": 500,
                "fontSize": {
                  "desktop": 20,
                  "tablet": 16,
                  "mobile": 12
                },
                "lineHeight": 1,
                "fontFamily": "Montserrat, sans-serif"
              }
            },
            "ratingIcon": {
              "width": "26px",
              "height": "26px"
            }
          }
        }

    }

  })



}