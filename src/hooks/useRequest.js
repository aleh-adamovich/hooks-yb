import {useEffect, useMemo, useState} from "react";

const useRequest = (request) => {
  const initialState = useMemo(() => ({
    data: null,
    loading: true,
    error: null,
  }), []);

  const [state, setState] = useState(initialState);

  useEffect(() => {
    setState(initialState);

    let cancelled = false;
    request()
      .then(data => !cancelled && setState({
        data,
        loading: false,
        error: null,
      }))
      .catch((e) => {
        !cancelled && setState({
          data: null,
          loading: false,
          error: e,
        });
      });

    return () => {
      cancelled = true;
    }
  }, [request, initialState]);

  return state;
}

export default useRequest;
