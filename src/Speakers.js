import React, {useState,useEffect, useContext, useReducer,useCallback, useMemo} from "react";
import { Header } from "../src/Header";
import { Menu } from "../src/Menu";
import SpeakerDetail from './SpeakerDetail';
import speakerData from "./SpeakerData";
import { ConfigContext } from "./App";
import speakersReducer from "./speakersReducer";


const Speakers = () => {
    const [speakingSunday, setSpeakingSunday] = useState(true);
    const [speakingSaturday, setSpeakingSaturday] = useState(true);

   
    const [speakerList, dispatch] = useReducer(speakersReducer, [] );
    const [isLoading, setIsloading] = useState(true);
    const context = useContext(ConfigContext);

    useEffect(() => {
        setIsloading(true);
        new Promise((resolve) => {
            setTimeout(() => resolve(),1000)
        }).then(() => {
            setIsloading(false)
            const speakerListServerFilter = speakerData.filter(({sat,sun}) => {
                return (speakingSaturday && sat) || (speakingSunday && sun);
            });
         
            // setSpeakerList(speakerListServerFilter);
            dispatch({
              type: "setSpeakerList",
              data: speakerListServerFilter
            });
        });
        return () => {
            console.log('cleanup');
          };
    },[]);

    const handleChangeSaturday = () => {
        setSpeakingSaturday(!speakingSaturday);
      };
    const newSpeakerList = useMemo( () => speakerList
    .filter(
      ({ sat, sun }) =>
        (speakingSaturday && sat) || (speakingSunday && sun),
    )
    .sort(function (a, b) {
      if (a.firstName < b.firstName) {
        return -1;
      }
      if (a.firstName > b.firstName) {
        return 1;
      }
      return 0;
    }),[speakingSaturday,speakingSunday,speakerList]);
      const speakerListFiltered = isLoading
        ? []
        : newSpeakerList
    
      const handleChangeSunday = () => {
        setSpeakingSunday(!speakingSunday);
      };
    
      const heartFavoriteHandler = useCallback((e, favoriteValue) => {
        e.preventDefault();
        const sessionId = parseInt(e.target.attributes['data-sessionid'].value);
        
        dispatch({
          type: favoriteValue === true ? "favorite" : "unfavorite",
          sessionId
        })
        
        // setSpeakerList(
        //   speakerList.map((item) => {
        //     if (item.id === sessionId) {
        //       return { ...item, favorite: favoriteValue };
        //     }
        //     return item;
        //   }),
        // );
        //console.log("changing session favorte to " + favoriteValue);


      },[]);
    
      if (isLoading) return <div>Loading...</div>;
    
      return (
        <div>
          <Header />
          <Menu />
          <div className="container">
            <div className="btn-toolbar  margintopbottom5 checkbox-bigger">
              {context.showSpeakerSpeakingDays === false ? null : (
                <div className="hide">
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={handleChangeSaturday}
                        checked={speakingSaturday}
                      />
                      Saturday Speakers
                    </label>
                  </div>
                  <div className="form-check-inline">
                    <label className="form-check-label">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={handleChangeSunday}
                        checked={speakingSunday}
                      />
                      Sunday Speakers
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="row">
              <div className="card-deck">
                {speakerListFiltered.map(
                  ({ id, firstName, lastName, bio, favorite }) => {
                    return (
                      <SpeakerDetail
                        key={id}
                        id={id}
                        favorite={favorite}
                        onHeartFavoriteHandler={heartFavoriteHandler}
                        firstName={firstName}
                        lastName={lastName}
                        bio={bio}
                      />
                    );
                  },
                )}
              </div>
            </div>
          </div>
        </div>
      );
};
    
export default Speakers;