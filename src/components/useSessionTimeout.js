import { useEffect } from 'react';

const useSessionTimeout = () => {
  const setLastActivityTime = () => {
    localStorage.setItem('lastActivityTime', Date.now());
  };

  const checkSessionTimeout = () => {
    const lastActivityTime = localStorage.getItem('lastActivityTime');
    if (lastActivityTime) {
      const elapsed = Date.now() - parseInt(lastActivityTime);
      const timeoutDuration = 30 * 60 * 1000; // 30 minutes in milliseconds
      if (elapsed > timeoutDuration) {
        localStorage.clear(); // Reset localStorage
        window.location.href = '/login'; // Redirect to login page
      }
    }
  };

  const resetSessionTimeout = () => {
    clearTimeout(window.sessionTimer); // Clear existing timer
    window.sessionTimer = setTimeout(checkSessionTimeout, 1 * 60 * 1000); // Set new timer for 30 minutes
  };

  useEffect(() => {
    // Event listeners to track user activity
    const handleActivity = () => {
      resetSessionTimeout();
      setLastActivityTime();
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);

    // Initial setup
    setLastActivityTime();
    resetSessionTimeout();

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
    };
  }, []);

};

export default useSessionTimeout;
