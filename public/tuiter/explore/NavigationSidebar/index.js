const NavigationSidebar = () => {
  return (`
      <div class="list-group">
        <a class="list-group-item" href="/">
          <i class="fab fa-twitter"></i></a>
          <!-- continue rest of list, e.g.,
               Home, Explore, Notifications,  Messages, etc. -->
    <li class="list-group-item"><a href="home.html"><i class="fas fa-home"></i> <span
               class="d-none d-xl-inline">Home</span></a></li>
   <li class="list-group-item active"><a href="explore/index.html"><i class="fas fa-hashtag"></i> <span
               class="d-none d-xl-inline">Explore</span></a></li>
   <li class="list-group-item"><a href="messages.html"><i class="fas fa-envelope"></i> <span
               class="d-none d-xl-inline">Messages</span></a></li>
   <li class="list-group-item"><a href="notifications.html"><i class="fas fa-bell"></i> <span
               class="d-none d-xl-inline">Notification</span></a></li>
   <li class="list-group-item"><a href="bookmarks/index.html"><i class="fas fa-bookmark"></i> <span
               class="d-none d-xl-inline">Bookmarks</span></a></li>
   <li class="list-group-item"><a href="lists.html"><i class="fas fa-list"></i> <span
               class="d-none d-xl-inline">Lists</span></a></li>
   <li class="list-group-item"><a href="profile.html"><i class="fas fa-user"></i> <span
               class="d-none d-xl-inline">Profile</span></a></li>
   <li class="list-group-item"><a href="more.html"><i class="fas fa-ellipsis-h"></i> <span
               class="d-none d-xl-inline">More</span></a></li>
      </div>
      <div class="d-grid mt-2">
        <a href="tweet.html"
           class="btn btn-primary btn-block rounded-pill">
           Tweet</a>
      </div>
    `);
}
export default NavigationSidebar;