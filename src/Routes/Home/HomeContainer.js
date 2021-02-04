import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api';

export default class HomeContainer extends React.Component {
  state = {
    nowPlaying : null,
    upcoming : null,
    popular : null,
    error : null,
    loading : true,
  }

  async componentDidMount() {
    try{
      /* api에서 호출 된 data : { results : []} 의 값을 nowPlaying 의 이름으로 저장함
        만약 뒤에 : nowPlaying를 적지 않는다면 results 의 이름으로 저장됨
      */
      const { data : { results: nowPlaying } } = await moviesApi.nowPlaying();
      const { data : { results : upComming} } = await moviesApi.upComing();
      const { data : { results : popular} } = await moviesApi.popular();
      // throw Error();
      this.setState({ nowPlaying, upComming, popular })
    } catch {
      this.setState({ error : "Can't find Movie infomation"  })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { nowPlaying, upComming, popular, error, loading} = this.state;
    return (
      <HomePresenter 
        nowPlaying={nowPlaying}
        upComming={upComming}
        popular={popular}
        error = {error}
        loading = {loading}
      />
    )
  }
  
}

