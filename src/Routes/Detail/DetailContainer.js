import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi, tvApi } from '../../api';

export default class DetailContainer extends React.Component {

  constructor(props) {
    super(props);

    const { location : { pathname } } = props;

    this.state = {
      result: null,
      error : null,
      loading : false,
      isMovie : pathname.includes('/movie/')
    };
  }



  async componentDidMount() {
    
    const { 
      match : { params : { id } },
      history : { push },
    } = this.props;
    const parseId = parseInt(id);
    const { isMovie } = this.state;
    if( isNaN(parseId) ) {
      return push("/");
    }
    // console.log(`detail-isMovie`, isMovie);

    let result = null;

    
    try {
      if(isMovie) {
        ({ data : result } = await moviesApi.movieDetail(parseId));
      } else {
        ({ data : result } = await tvApi.showDetail(parseId));
      }
      // console.log(`result`, result);
    } catch {
      this.setState({ error : "Can't find detail"  })
    } finally {
      this.setState({ loading: false, result })
    }




  }

  render() {
    const { result, error, loading } = this.state;
    // console.log(this.props);
    // console.log(`detail-result`, result);

    return (
      <DetailPresenter 
        result = {result}
        error = {error}
        loading = {loading}
      />
    )
  }
}