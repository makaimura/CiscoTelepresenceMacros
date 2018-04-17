## Cisco CE Room Devices Macros - Two-Tap Dial
You can dial your favorite 5 contacts with only two taps with this macro.

### Snapshot of DX70 home screen with Two-Tap Dial:
One tap,
![alt text](https://user-images.githubusercontent.com/3436768/38845602-271f8282-4233-11e8-8f33-4edd1bbe44ac.png)
And dial it!
![alt text](https://user-images.githubusercontent.com/3436768/38845603-274664ec-4233-11e8-87d7-2692e80a7c05.png)

### Release Notes
#### ver. 1.0
The numbers or addresses of the 5 contacts are hard-corded like this. So, if you want to modify them, you need to modify codes.

```javascript
const speedList = (contact) => ({
  "FavCall_1": "user1@brah.webex.com",
  "FavCall_2": "user2@brah.webex.com",
  "FavCall_3": "user3@brah.webex.com",
  "FavCall_4": "user4@brah.webex.com",
  "FavCall_5": "user5@brah.webex.com"
})[contact];
```

The problem, I suppose, is that these numbers or addresses don't refer local phonebook on the devices so you need to maintain them part from the phonebook. That's why I'm planning to improve this macro to fetch them from the phonebook on the later version.
