import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../store/features/dataSlice';
import { CustomTable, Filter, Loading } from '../../components';
import { fetchData } from '../../api/data';

const TrackingPage: React.FC = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData();
        dispatch(setData(data));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData();
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Filter />
          <div style={{ marginTop: 50 }}>
            <CustomTable selectionType="checkbox" />
          </div>
        </>
      )}
    </div>
  );
};

export default TrackingPage;
