export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

export function useLoading() {
  let loading = false;

  function setLoading(isLoading) {
    loading = isLoading;
  }

  function isLoading() {
    return loading;
  }

  return [isLoading, setLoading];
}

export function updateButtonText(button, isLoading) {
  if (isLoading) {
    button.textContent = 'Loading...';
    button.disabled = true;
  } else {
    button.textContent = 'Submit';
    button.disabled = false;
  }
}
