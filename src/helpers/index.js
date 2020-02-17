import { debounce, find } from 'lodash';

export const addDebounce = (func, timeout = 500) => (
  debounce(func, timeout, { leading: true, trailing: false })
);

export const handleDeepLinks = (event, navigator, skipDeepLinks = false) => {
  if (!event || !navigator) {
    throw Error('Please specify both event and navigator parameters');
  }

  if (event.type === 'DeepLink' && event.link && !skipDeepLinks) {
    if (event.link === 'MainScreen') {
      navigator.popToRoot({
        animated: true,
        animationType: 'fade',
      });
      navigator.switchToTab({
        tabIndex: 1,
      });
      return;
    }

    navigator.resetTo({ screen: event.link });
  }

  if (event.id === 'customSideMenu') {
    navigator.toggleDrawer({
      side: 'right',
      animated: true,
    });
  }

  if (event.id === 'Notifications') {
    navigator.push({
      screen: 'Notifications',
      title: 'Varsler',
      animationType: 'slide-horizontal',
    });
  }

  if (event.id === 'customBack') {
    navigator.pop({
      animated: true,
    });
  }

  if (event.id === 'customModalBack') {
    navigator.dismissModal({
      animationType: 'slide-down',
    });
  }
};

export const addCheckFlag = (interests) => {
  for (let i = 0; i < interests.length; i += 1) {
    interests[i].isChecked = false;
  }
  return interests;
};

export const formatInterest = payload => ({ categoryId: `${payload}` });

export const checkInterests = (interests, categories) => {
  const result = categories.map((category) => {
    const interest = find(interests, { category: { id: category.id } });
    return {
      ...category,
      isChecked: !!interest,
      interest,
    };
  });

  return result;
};
