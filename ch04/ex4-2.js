// core.async

http.get('api/users/find?name=' + name, function(user){
  http.get('api/orders?userId=' + user.id, function(orders){
    orders.forEach(function(order){
      container.append(order);
    });
  });
});



http.get('api/users/find?name=' + name)
  .then(function(user){
    return http.get('api/orders?userId=' + user.id);
  })
  .then(function(orders){
    orders.forEach(function(order){
      container.append(order);
    });
  });



user   = http.get('api/user/find?name=' + name);
orders = http.get('api/orders?userId=' + user.id);
orders.forEach(function(order){
  container.append(order);
});
